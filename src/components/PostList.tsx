import type { Post } from "@/lib/substack";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <a key={post.link} href={post.link} className="group block">
          {post.image && (
            // Substack images come from its own CDN, so a plain img is simplest.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image}
              alt=""
              loading="lazy"
              className="aspect-[16/10] w-full border-b-4 border-red object-cover"
            />
          )}
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-red">
            {dateFormat.format(new Date(post.date))}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug group-hover:underline">
            {post.title}
          </h3>
          {post.summary && <p className="mt-2 line-clamp-3 text-ink/75">{post.summary}</p>}
        </a>
      ))}
    </div>
  );
}
