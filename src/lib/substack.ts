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
// Returns an empty list if no Substack is set or the feed can't be read.
export async function getSubstackPosts(limit = 12): Promise<Post[]> {
  "use cache";
  cacheLife("hours");
  if (!site.substack) return [];

  try {
    const res = await fetch(`${site.substack.replace(/\/$/, "")}/feed`);
    if (!res.ok) return [];
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => ({
      title: decode(tag(item, "title")),
      link: decode(tag(item, "link")),
      date: new Date(tag(item, "pubDate")).toISOString(),
      summary: decode(tag(item, "description")),
      image: item.match(/<enclosure[^>]*url="([^"]+)"/)?.[1],
    }));
  } catch {
    return [];
  }
}
