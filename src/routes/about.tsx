import { createFileRoute } from "@tanstack/react-router";
import author from "@/assets/author.jpg";
import { Section, SectionTitle, FadeUp } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sir Wolfdogg — Leon Lanier-French" },
      { name: "description", content: "The biography of Leon Lanier-French — author, business professor, and mentor known as Sir Wolfdogg." },
      { property: "og:title", content: "About Sir Wolfdogg" },
      { property: "og:description", content: "Author, professor, mentor, speaker." },
      { property: "og:image", content: author },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section>
        <SectionTitle eyebrow="About" title="The Man Behind The Pen" />
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <FadeUp>
            <img src={author} alt="Leon Lanier-French" className="lg:col-span-2 rounded-2xl luxury-border shadow-elegant" loading="lazy" />
          </FadeUp>
          <div className="lg:col-span-3 space-y-5 text-foreground/85 leading-relaxed">
            <FadeUp delay={0.1}>
              <h3 className="font-display text-3xl text-gold">Leon Lanier-French</h3>
              <p className="text-muted-foreground italic">Author · Business Professor · Mentor</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p>
                Leon Lanier-French — known to readers as <span className="text-gold">Sir Wolfdogg</span> — is a distinguished
                author, business professor, and lifelong mentor. His career has spanned the academy, the boardroom, and the
                community, where he has consistently championed the principles of integrity, discipline, and bold leadership.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p>
                A devoted scholar and storyteller, his writing moves seamlessly between historical fiction and leadership
                doctrine. Whether unfolding the haunting legacy of <em>Sharpswood Plantation</em>, distilling the
                <em> 39 Virtues of Integrity</em>, or sharpening executives through <em>Gutsy Leadership</em>, his work invites
                readers to live with conviction.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p>
                Beyond the page, Sir Wolfdogg keynotes events, mentors aspiring authors and entrepreneurs, and consults with
                organizations seeking to align performance with principle.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                {[
                  { k: "30+", v: "Years Mentoring" },
                  { k: "10+", v: "Published Works" },
                  { k: "100+", v: "Keynote Engagements" },
                ].map((s) => (
                  <div key={s.v} className="luxury-border rounded-lg p-5 text-center bg-card">
                    <div className="font-display text-3xl text-gradient-gold">{s.k}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>
    </>
  );
}
