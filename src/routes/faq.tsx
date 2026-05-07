import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionTitle } from "@/components/Section";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Sir Wolfdogg" }, { name: "description", content: "Frequently asked questions about Sir Wolfdogg's books and services." }] }),
  component: FAQ,
});

const QAS = [
  { q: "Are signed editions available?", a: "Yes — limited signed hardcovers are available on select titles. Reach out via the Contact page to reserve a copy." },
  { q: "Do you ship internationally?", a: "We ship across the United States with free standard shipping. International orders are fulfilled on request." },
  { q: "How do I book Sir Wolfdogg for speaking?", a: "Use the Contact form or schedule a discovery call. Engagements include keynotes, workshops, and corporate retreats." },
  { q: "Are digital editions offered?", a: "eBook and audiobook editions are coming soon for the entire catalog." },
  { q: "What is your return policy?", a: "Unopened books may be returned within 30 days for a full refund. Signed editions are final sale." },
  { q: "Do you offer bulk pricing for organizations?", a: "Absolutely. Bulk discounts begin at 25 copies. Contact us for a custom quote." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionTitle eyebrow="Support" title="Frequently Asked" />
      <div className="max-w-3xl mx-auto space-y-3">
        {QAS.map((qa, i) => (
          <div key={i} className="luxury-border rounded-xl bg-card overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
              <span className="font-display text-lg text-foreground">{qa.q}</span>
              <ChevronDown className={`h-5 w-5 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{qa.a}</div>}
          </div>
        ))}
      </div>
    </Section>
  );
}
