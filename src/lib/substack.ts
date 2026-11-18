import { cacheLife } from "next/cache";
import { site } from "@/lib/site";

export type Post = {
  title: string;
  link: string;
  date: string;
  summary: string;
  image?: string;
};

function tag(xml: string, name: string) {
  const match = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  if (!match) return "";
  return match[1].replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, "$1").trim();
}

function decode(text: string) {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

// Latest posts from Barrett's Substack RSS feed, refreshed every few hours.
// Returns an empty list if no Substack is set or the feed can't be read; a
// failed read is retried after a few minutes rather than hours.
export async function getSubstackPosts(limit = 12): Promise<Post[]> {
  "use cache";
  if (!site.substack) {
    cacheLife("max");
    return [];
  }

  try {
    const res = await fetch(`${site.substack.replace(/\/$/, "")}/feed`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; AngloMediaWebsite/1.0; +https://anglomedia.ma)",
        Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
      },
    });
    if (!res.ok) throw new Error(`Substack feed returned ${res.status}`);
    const xml = await res.text();
    const posts = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => ({
      title: decode(tag(item, "title")),
      link: decode(tag(item, "link")),
      date: new Date(tag(item, "pubDate")).toISOString(),
      summary: decode(tag(item, "description")),
      image: item.match(/<enclosure[^>]*url="([^"]+)"/)?.[1],
    }));
    if (posts.length) cacheLife("hours");
    else cacheLife("minutes");
    return posts;
  } catch (error) {
    console.error("Could not read the Substack feed:", error);
    cacheLife("minutes");
    return [];
  }
}
