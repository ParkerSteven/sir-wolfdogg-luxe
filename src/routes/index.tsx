import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Mic, Users, Compass, Briefcase, QrCode, Calendar } from "lucide-react";
import logo from "@/assets/logo.webp";
import author from "@/assets/author.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { BOOKS, POSTS } from "@/lib/data";
import BookCard from "@/components/BookCard";
import { Section, SectionTitle, FadeUp } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sir Wolfdogg Bookstore — Author Leon Lanier" },
      { name: "description", content: "Books, leadership wisdom, and speaking engagements from Sir Wolfdogg — Leon Lanier-French." },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Briefcase, title: "Consulting", text: "Strategic counsel for executives and ambitious enterprises." },
  { icon: Compass, title: "Coaching", text: "One-on-one transformation rooted in 39 virtues of integrity." },
  { icon: Mic, title: "Public Speaking", text: "Keynotes that move audiences from inspiration to action." },
  { icon: Users, title: "Mentorship", text: "Long-term guidance for the next generation of leaders." },
  { icon: BookOpen, title: "Business Guidance", text: "Practical playbooks for founders and operators." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-36 text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={logo}
            alt="Sir Wolfdogg"
            className="h-40 w-40 mx-auto rounded-full ring-2 ring-gold shadow-gold"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl sm:text-7xl mt-8 tracking-tight"
          >
            <span className="text-gradient-gold">Sir Wolfdogg</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-sm sm:text-base uppercase tracking-[0.5em] text-muted-foreground"
          >
            Author · Speaker · Mentor
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 max-w-xl mx-auto text-foreground/80"
          >
            Timeless works on integrity, leadership, and legacy — crafted to forge character and inspire bold living.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3 justify-center"
          >
            <Link to="/shop" className="px-7 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md hover:opacity-90 transition shadow-gold">
              Shop Books
            </Link>
            <Link to="/about" className="px-7 py-3 border border-gold/50 text-gold text-xs uppercase tracking-widest rounded-md hover:bg-gold hover:text-primary-foreground transition">
              About Author
            </Link>
            <Link to="/contact" className="px-7 py-3 border border-foreground/20 text-foreground/80 text-xs uppercase tracking-widest rounded-md hover:border-gold hover:text-gold transition">
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
              <img src={author} alt="Leon Lanier — Sir Wolfdogg" className="relative rounded-2xl shadow-elegant luxury-border" loading="lazy" />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">About the Author</p>
            <h2 className="font-display text-4xl sm:text-5xl text-gradient-gold leading-tight">
              Leon Lanier-French
            </h2>
            <p className="mt-2 text-muted-foreground italic">Empowered Author · Business Professor</p>
            <p className="mt-6 text-foreground/85 leading-relaxed">
              Sir Wolfdogg — pen name of Leon Lanier-French — is a distinguished author, business professor,
              and mentor whose body of work spans historical fiction, leadership, and personal development.
              His writing is rooted in lived experience, scholarly rigor, and an unwavering commitment to integrity.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Through his books, classrooms, and keynotes, he equips readers and leaders with the principles
              required to build lives and enterprises that endure.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-gold hover:gap-3 transition-all">
              Read full biography <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>
      </Section>

      {/* CREATIVE VERSATILITY */}
      <Section className="bg-[oklch(0.1_0.005_60)]">
        <SectionTitle eyebrow="Creative Versatility" title="A Voice Across Genres" sub="From sweeping historical novels to leadership doctrine — one author, many disciplines, a singular mission." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Historical Fiction", text: "Vivid storytelling rooted in the American experience." },
            { title: "Leadership Doctrine", text: "Battle-tested principles for executives and founders." },
            { title: "Personal Development", text: "Frameworks that forge character and purpose." },
          ].map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.1}>
              <div className="p-8 luxury-border rounded-xl bg-card/50 hover:bg-card transition-all hover:-translate-y-1 h-full">
                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display text-xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-2xl text-gold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO / FEATURED BOOKS */}
      <Section>
        <SectionTitle eyebrow="The Portfolio" title="Featured Works" sub="A curated collection of signature titles by Sir Wolfdogg." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {BOOKS.map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
        </div>
        <div className="mt-12 text-center">
          <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md shadow-gold">
            Browse The Bookstore <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* BLOG PREVIEW */}
      <Section className="bg-[oklch(0.1_0.005_60)]">
        <SectionTitle eyebrow="From the Journal" title="Latest Writings" />
        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <FadeUp key={p.slug} delay={i * 0.1}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block group luxury-border rounded-xl overflow-hidden bg-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold/70">{p.date}</p>
                  <h3 className="font-display text-xl mt-2 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs uppercase tracking-widest text-gold">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionTitle eyebrow="Overview of Services" title="Work With Sir Wolfdogg" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.05}>
              <div className="p-6 luxury-border rounded-xl bg-card hover:shadow-gold transition-all h-full">
                <s.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-display text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* QR / LINKS */}
      <Section className="bg-[oklch(0.1_0.005_60)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">QR Code & Pay Links</p>
            <h2 className="font-display text-4xl text-gradient-gold">One Scan. Every Title.</h2>
            <p className="mt-5 text-muted-foreground">
              Share Sir Wolfdogg's catalog instantly. Scan to access the bookstore, secure payment links, and exclusive author updates.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/shop" className="px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md">
                Open Bookstore
              </Link>
              <Link to="/contact" className="px-6 py-3 border border-gold/50 text-gold text-xs uppercase tracking-widest rounded-md">
                Get In Touch
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="aspect-square max-w-sm mx-auto luxury-border rounded-2xl bg-card flex items-center justify-center p-12">
              <div className="text-center">
                <QrCode className="h-40 w-40 mx-auto text-gold" strokeWidth={1} />
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">SirWolfdoggBookstore.com</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* APPOINTMENT */}
      <Section>
        <SectionTitle eyebrow="Online Appointments" title="Book A Session" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Discovery Call", duration: "30 minutes", price: "Complimentary" },
            { title: "Coaching Session", duration: "60 minutes", price: "$250" },
            { title: "Speaking Inquiry", duration: "Custom", price: "On Request" },
          ].map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.1}>
              <div className="p-8 luxury-border rounded-xl bg-card text-center hover:shadow-gold transition-all">
                <Calendar className="h-10 w-10 mx-auto text-gold" />
                <h3 className="mt-4 font-display text-xl">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.duration}</p>
                <p className="mt-4 font-display text-2xl text-gradient-gold">{a.price}</p>
                <Link to="/contact" className="inline-block mt-6 px-6 py-2.5 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md">
                  Schedule
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  );
}
