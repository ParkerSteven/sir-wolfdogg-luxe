import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Section, SectionTitle } from "@/components/Section";

export const Route = createFileRoute("/donation")({
  head: () => ({ meta: [{ title: "Support The Mission — Sir Wolfdogg" }, { name: "description", content: "Support Sir Wolfdogg's literacy and leadership mission." }] }),
  component: Donation,
});

const TIERS = [
  { amt: 25, label: "Friend", note: "Sponsor one book to a student." },
  { amt: 100, label: "Patron", note: "Underwrite a leadership workshop." },
  { amt: 500, label: "Benefactor", note: "Fund a community keynote." },
];

function Donation() {
  return (
    <Section>
      <SectionTitle eyebrow="Give Back" title="Support The Mission" sub="Your contribution funds books, mentorship, and leadership programs in underserved communities." />
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TIERS.map((t) => (
          <div key={t.amt} className="luxury-border rounded-xl p-8 bg-card text-center hover:shadow-gold transition-all">
            <Heart className="h-10 w-10 mx-auto text-gold" />
            <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{t.label}</p>
            <div className="font-display text-4xl text-gradient-gold mt-2">${t.amt}</div>
            <p className="mt-3 text-sm text-muted-foreground">{t.note}</p>
            <button className="mt-6 w-full px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md shadow-gold">
              Donate ${t.amt}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12 max-w-xl mx-auto luxury-border rounded-xl p-6 bg-card">
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Custom Amount (USD)</span>
          <input type="number" min="1" placeholder="50" className="mt-1 w-full bg-input border border-gold/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold" />
        </label>
        <button className="mt-4 w-full px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md">
          Give Now
        </button>
      </div>
    </Section>
  );
}
