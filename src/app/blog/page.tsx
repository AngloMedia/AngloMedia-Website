import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { ButtonLink, PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import { getSubstackPosts } from "@/lib/substack";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by K. Barrett Bilali on culture, business, education and life in Morocco, from his Substack.",
};

export default async function BlogPage() {
  const posts = await getSubstackPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Writing from Morocco"
        intro="Articles by K. Barrett Bilali on culture, business, education and life in Morocco, published on Substack."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="text-lg text-ink/80">
            New articles are on their way. In the meantime, visit the blog on
            Substack.
          </p>
        )}
        {site.substack && (
          <div className="mt-16 grid gap-10 border-t border-navy/15 pt-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold">Get new articles by email</h2>
              <p className="mt-3 text-ink/80">
                Subscribe for free and new posts arrive straight in your inbox.
              </p>
            </div>
            <iframe
              src={`${site.substack.replace(/\/$/, "")}/embed`}
              title="Subscribe to K. Barrett Bilali on Substack"
              loading="lazy"
              className="h-[320px] w-full border border-navy/15 bg-white"
            />
          </div>
        )}
        {site.substack && (
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={`${site.substack.replace(/\/$/, "")}/subscribe`}>
              Subscribe for free
            </ButtonLink>
            <ButtonLink href={site.substack} variant="outline">
              Read on Substack
            </ButtonLink>
          </div>
        )}
      </section>
    </>
  );
}
