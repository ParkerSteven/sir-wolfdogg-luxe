import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, Compass, ShieldCheck } from "lucide-react";
import { Section, SectionTitle } from "@/components/Section";

export const Route = createFileRoute("/guide")({
  head: () => ({ meta: [{ title: "User Guide — Sir Wolfdogg" }] }),
  component: Guide,
});

const SECTIONS = [
  { icon: BookOpen, title: "Getting Started", text: "Create an account, browse the catalog, and place your first order in minutes." },
  { icon: Download, title: "Digital Editions", text: "How to download and read your eBooks and audiobooks across devices." },
  { icon: Compass, title: "Navigating Services", text: "Book a coaching session, discovery call, or speaking engagement." },
  { icon: ShieldCheck, title: "Account & Security", text: "Manage your profile, payment methods, and privacy preferences." },
];

function Guide() {
  return (
    <Section>
      <SectionTitle eyebrow="Resources" title="User Guide" sub="Everything you need to make the most of SirWolfdoggBookstore.com" />
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {SECTIONS.map((s) => (
          <div key={s.title} className="luxury-border rounded-xl p-7 bg-card">
            <s.icon className="h-9 w-9 text-gold" />
            <h3 className="mt-4 font-display text-xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            <button className="mt-5 text-xs uppercase tracking-widest text-gold hover:underline">Read Guide →</button>
          </div>
        ))}
      </div>
    </Section>
  );
}
