import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BOOKS } from "@/lib/data";
import BookCard from "@/components/BookCard";
import { Section, SectionTitle } from "@/components/Section";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Bookstore — Sir Wolfdogg" },
      { name: "description", content: "Browse the full collection of books by Sir Wolfdogg." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const cats = ["All", ...Array.from(new Set(BOOKS.map((b) => b.category)))];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? BOOKS : BOOKS.filter((b) => b.category === active);

  return (
    <Section>
      <SectionTitle eyebrow="The Bookstore" title="Browse The Catalog" sub="Every title hand-crafted by Sir Wolfdogg — premium hardcovers, signed editions, and digital copies available." />
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
              active === c ? "bg-gradient-gold text-primary-foreground shadow-gold" : "luxury-border text-foreground/80 hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
      </div>
      <div className="mt-12 text-center text-sm text-muted-foreground">
        Looking for a signed edition? <Link to="/contact" className="text-gold">Contact us</Link>.
      </div>
    </Section>
  );
}
