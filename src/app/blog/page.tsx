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
          <div className="mt-16 flex flex-wrap gap-4 border-t border-navy/15 pt-10">
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
