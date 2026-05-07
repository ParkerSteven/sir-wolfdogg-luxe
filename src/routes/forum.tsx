import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Users, TrendingUp } from "lucide-react";
import { Section, SectionTitle } from "@/components/Section";

export const Route = createFileRoute("/forum")({
  head: () => ({ meta: [{ title: "Community Forum — Sir Wolfdogg" }] }),
  component: Forum,
});

const THREADS = [
  { title: "Lessons learned from 39 Virtues — Chapter 7", author: "Marcus", replies: 24, views: 312, cat: "Books" },
  { title: "Gutsy Leadership in tough markets", author: "Aisha", replies: 18, views: 201, cat: "Leadership" },
  { title: "The historical research behind Sharpswood", author: "James", replies: 11, views: 156, cat: "Writing" },
  { title: "Mentorship circle — May meetup", author: "Tasha", replies: 31, views: 489, cat: "Community" },
];

function Forum() {
  return (
    <Section>
      <SectionTitle eyebrow="Community" title="The Wolfdogg Forum" sub="A gathering place for readers, leaders, and seekers of wisdom." />
      <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
        {[
          { icon: Users, label: "Members", val: "2.4K" },
          { icon: MessageCircle, label: "Discussions", val: "412" },
          { icon: TrendingUp, label: "Active Today", val: "87" },
        ].map((s) => (
          <div key={s.label} className="luxury-border rounded-xl p-5 bg-card text-center">
            <s.icon className="h-6 w-6 mx-auto text-gold" />
            <div className="font-display text-2xl text-gradient-gold mt-2">{s.val}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto luxury-border rounded-xl bg-card overflow-hidden">
        {THREADS.map((t, i) => (
          <div key={i} className={`p-5 hover:bg-secondary/50 transition-colors ${i > 0 ? "border-t border-gold/10" : ""}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold/70">{t.cat}</p>
                <h3 className="font-display text-lg mt-1 hover:text-gold cursor-pointer">{t.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">Started by {t.author}</p>
              </div>
              <div className="text-right text-xs text-muted-foreground shrink-0">
                <div>{t.replies} replies</div>
                <div>{t.views} views</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-7 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md shadow-gold">
          Join The Conversation
        </button>
      </div>
    </Section>
  );
}
