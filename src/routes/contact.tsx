import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Section, SectionTitle } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Sir Wolfdogg" }, { name: "description", content: "Reach out to Sir Wolfdogg for speaking, coaching, mentorship, or general inquiries." }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section>
      <SectionTitle eyebrow="Get In Touch" title="Contact Sir Wolfdogg" />
      <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: Mail, label: "Email", val: "Laniersr497@aol.com" },
            { icon: Phone, label: "Phone", val: "703-863-2772" },
            { icon: MapPin, label: "Based In", val: "United States" },
          ].map((c) => (
            <div key={c.label} className="luxury-border rounded-xl p-6 bg-card flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="font-display text-lg text-foreground mt-1">{c.val}</p>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 luxury-border rounded-xl p-8 bg-card space-y-5"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="h-16 w-16 mx-auto rounded-full bg-gradient-gold flex items-center justify-center">
                <Send className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-gold">Message Sent</h3>
              <p className="mt-2 text-muted-foreground">Sir Wolfdogg's team will respond shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                  <input required className="mt-1 w-full bg-input border border-gold/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                  <input required type="email" className="mt-1 w-full bg-input border border-gold/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Subject</span>
                <input required className="mt-1 w-full bg-input border border-gold/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
                <textarea required rows={6} className="mt-1 w-full bg-input border border-gold/20 rounded-md px-4 py-3 focus:outline-none focus:border-gold resize-none" />
              </label>
              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md shadow-gold">
                Send Message <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </Section>
  );
}
