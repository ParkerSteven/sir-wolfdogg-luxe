import { createFileRoute } from "@tanstack/react-router";
import author from "@/assets/author.jpg";
import authorImg from "@/assets/rs=w_600,h_600,cg_true.webp";
import authorImg2 from "@/assets/rs=w_600,h_600,cg_true (1).webp";

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
        <SectionTitle title="About Sir Wolfdogg Lanier-French" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
              <img src={authorImg} alt="Leon Lanier — Sir Wolfdogg" className="relative rounded-2xl shadow-elegant luxury-border" loading="lazy" />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl text-gradient-gold leading-tight">
              Educator / Author Business Professional
            </h2>
            <p className="mt-6 text-foreground/85 leading-relaxed">
              Congratulations to Sir Wolfdogg Lanier-French! His historical work "Sharswood Plantation: The Legacy of Sarah Miller" has qualified as an "Entrant Submission" for a 2026 Pulitzer in the Category of U.S History! Thanks, the Selection Committee for such an opportunity!
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              A published writer, Sir Lanier-French combines the best of legal research with personal experiential knowledge. Whether Education, Books, or Culture-Change Formats, Sir Lanier-French's information delivery is complete with personal introspections including the best of worldviews. His professional career resonates with readers and viewers globally! (Photo Circa 2025)
            </p>
          </FadeUp>
        </div>
      </Section>
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl text-gradient-gold leading-tight">
              Sir Wolfdogg Lanier-French
            </h2>
            <p className="mt-6 text-foreground/85 leading-relaxed">
              Sir Wolfdogg Lanier-French earned his Associate Degree in Criminal Law at American University in Washington, DC. Acquired his Bachelor's Degree (BS) in Adult Education and Master's Degree (M.ED) in Educational Administration from the University of Cincinnati in Cincinnati, Ohio. Sir Lanier-French also successfully completed a 5-year Doctoral Curriculum and a written Dissertation on Corporate Leadership at the University of Phoenix in Phoenix, Arizona. Life and health issues interrupted his final Dissertation Defense Process which is still a bucket-list item. Sir Wolfdogg takes pride in delivering professional change-related introspections considered educational to all! (Photo Circa 2010)
            </p>
          </FadeUp>
            <FadeUp>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
              <img src={authorImg2} alt="Leon Lanier — Sir Wolfdogg" className="relative rounded-2xl shadow-elegant luxury-border" loading="lazy" />
            </div>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
