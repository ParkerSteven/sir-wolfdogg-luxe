import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/data";
import { Section, SectionTitle, FadeUp } from "@/components/Section";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Sir Wolfdogg" },
      { name: "description", content: "Insights on integrity, leadership, and the writing life from Sir Wolfdogg." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <Section>
      <SectionTitle eyebrow="The Journal" title="Writings & Reflections" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((p, i) => (
          <FadeUp key={p.slug} delay={i * 0.05}>
            <Link to="/blog/$slug" params={{ slug: p.slug }} className="block group luxury-border rounded-xl overflow-hidden bg-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold/70">{p.date}</p>
                <h3 className="font-display text-xl mt-2 group-hover:text-gold transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
