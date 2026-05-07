import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { POSTS } from "@/lib/data";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Post"} — Sir Wolfdogg Blog` },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:title", content: loaderData?.post.title ?? "" },
      { property: "og:image", content: loaderData?.post.image ?? "" },
    ],
  }),
  component: Post,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-display text-3xl text-gold">Post not found</h1>
      <Link to="/blog" className="inline-block mt-6 text-gold underline">Back to blog</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const r = useRouter();
    return <div className="py-32 text-center"><p>{error.message}</p><button onClick={() => { r.invalidate(); reset(); }} className="text-gold underline mt-4">Retry</button></div>;
  },
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <Section>
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold mb-8">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
      <article className="max-w-3xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{post.date}</p>
        <h1 className="font-display text-4xl sm:text-5xl mt-4 text-gradient-gold leading-tight">{post.title}</h1>
        <img src={post.image} alt={post.title} className="mt-8 rounded-xl luxury-border w-full" />
        <div className="prose prose-invert mt-10 space-y-5 text-foreground/85 leading-relaxed">
          <p className="text-xl text-foreground/90 italic">{post.excerpt}</p>
          <p>
            In a culture that often confuses noise with wisdom, the disciplined pursuit of principle remains the surest path
            to leadership that endures. The pages ahead unpack the why and the how — drawn from decades in classrooms,
            boardrooms, and conversations that shape careers.
          </p>
          <p>
            Each chapter invites you to slow down, to think clearly, and to lead with the kind of conviction that can be
            inherited by those who come after you. This is not a trend. It is a tradition — refined and ready for the
            challenges of our moment.
          </p>
          <p>
            Continue exploring the bookstore for full-length works, or join the next live keynote to experience these
            principles firsthand.
          </p>
        </div>
      </article>
    </Section>
  );
}
