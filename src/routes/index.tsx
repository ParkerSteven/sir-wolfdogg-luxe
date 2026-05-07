import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Mic, Users, Compass, Briefcase, QrCode, Calendar } from "lucide-react";
import logo from "@/assets/logo.webp";
import sarahMiller from "@/assets/rs=w_600,cg_true,m.webp";
import sharpswood from "@/assets/rs=w_600,cg_true_sharpswood.webp";
import gutsyCover from "@/assets/book-gutsy.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import consultingImage from "@/assets/rs=w_388,h_194,cg_true.webp";
import consultingImage2 from "@/assets/rs=w_388,h_194,cg_true,m.webp";
import editingImage from "@/assets/rs=w_600,h_600,cg_true.webp";
import man from "@/assets/rs=w_600,h_600,cg_true_man.webp";

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
            <Link to="/shop" className="btn-gold">Shop Books</Link>
            <Link to="/about" className="btn-outline-gold">About Author</Link>
            <Link to="/contact" className="btn-ghost-gold">Book Appointment</Link>

          </motion.div>
        </div>
      </section>

      {/* FEATURED BOOK */}
      <Section className="bg-background/95">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Black History Collection</p>
              <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-tight">
                Sharswood Plantation: The Legacy of Sarah Miller
              </h2>
            </div>
            <div className="space-y-5 text-foreground/80 text-sm leading-relaxed">
              <p>
                The Legacy of Sarah Miller acknowledges a plantation Matriarch’s bond from Post-Emancipation Proclamation through early 1900s. Her Million-to-One discovery was introduced to a nationally televised audience on a Sunday NWU TV Monthly segment. A difficult Era of American history to document. Generational must-read well worth your time! Black History Masterpiece!
              </p>
              <p className="font-semibold text-foreground">Library Collection Item</p>
            </div>
            <div className="space-y-4 text-sm">
              <div className="rounded-3xl bg-foreground/5 p-6">
                <p className="text-muted-foreground uppercase tracking-[0.25em] mb-2">Hardback</p>
                <p className="font-semibold text-2xl text-foreground">55.00</p>
                <p className="mt-2 text-muted-foreground">Limited Sale 40.0</p>
              </div>
              <div className="rounded-3xl bg-foreground/5 p-6">
                <p className="text-muted-foreground uppercase tracking-[0.25em] mb-2">Paperback</p>
                <p className="font-semibold text-2xl text-foreground">25.00</p>
                <p className="mt-2 text-muted-foreground">Free Shipping USA / Both In Stock</p>
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">*Early Sharswood sales include buried carrying book bags while supplies last.</p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={sharpswood} alt="Sharswood Plantation book cover" className="h-[500px] w-full object-contain" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section className="bg-background/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5">
          <div className="grid gap-12 xl:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-[2rem] overflow-hidden shadow-elegant luxury-border">
              <img src={sarahMiller} alt="Sarah Miller after post-Emancipation Proclamation" className="h-[520px] w-full object-cover" loading="lazy" />
            </div>
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.45em] text-gold/80">Historical portrait</p>
              <p className="text-sm leading-8 text-foreground/85">
              Sarah Miller after Post- Emancipation Proclamation. Sarah Miller was the Matriarch of a slave community on Virginia’s Sharswood Plantation. In the year 2020, a great grandson purchased a Virginia property (unknowingly) which previously enslaved both his and Sarah’s ancestors dating back to the1700s! An authentic discovery where chance, destiny and history intersects. Sarah’s matriarchal spirit from the 1800s is revisited in 2022 to assess America’s ever evolving culture. Historic documentation by one of Matriarch Sarah Miller’s eldest living descendants - Sir Wolfdogg Lanier-French!
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">(PHOTO COURTESY OF SIR WOLFDOgg LANIER-FRENCH)</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[oklch(0.08_0.02_20)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5">
          <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="rounded-[2rem] overflow-hidden shadow-elegant luxury-border">
              <img src={man} alt="Raleigh Miller historic portrait" className="h-[420px] w-full object-cover" loading="lazy" />
            </div>
            <div className="space-y-6 text-sm leading-7 text-foreground/85">
              <p>
                Raleigh Miller was Sarah Miller’s first-born child (1886-1945). His age in this photo varied based on who was interviewed. The photo and shirt collar suggests late 1800s or early 1900s. A genealogist will surely discover the truth one day. A dashing Grandfather for sure!
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">(PHOTO Courtesy OF E. LANIER)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* PORTFOLIO / FEATURED BOOKS */}
      <Section>
        <SectionTitle eyebrow="The Portfolio" title="Featured Works" sub="A curated collection of signature titles by Sir Wolfdogg." />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {BOOKS.slice(0, 4).map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
        </div>
        <div className="mt-12 text-center">
          <Link to="/shop" className="btn-gold">
            Browse The Bookstore <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section className="bg-[oklch(0.12_0.01_25)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Sir Wolfdogg's Portfolio</p>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground leading-tight">
              Gutsy Leadership: 1st Edition A Common Sense Workbook for Early Leadership Development
            </h2>
          </div>

          <div className="mt-12 md:w-[50%] mx-auto overflow-hidden rounded-[2rem]">
            <img src={gutsyCover} alt="Gutsy Leadership book cover" className="object-cover" loading="lazy" />
          </div>

          <div className="mt-10 space-y-4 text-center text-sm text-foreground/80">
            <p className="font-semibold text-gold">A Common Sense Workshop for Leadership Development</p>
            <p>Gutsy Leadership! How Gutsy are you . . . Really?</p>
            <p>Sir Lanier-French works closely with clients to ensure visions are reality-based. Introspective Self-Improvement Must-Read for Emerging 21st Century Leaders!</p>
            <p className="font-semibold">40.00 Hardback (In Stock / Free Shipping USA)</p>
          </div>
        </div>
      </Section>

      {/* BLOG PREVIEW */}
      <Section className="bg-[oklch(0.1_0.005_60)]">
        <SectionTitle eyebrow="From the Journal" title="Blogs" />
        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.slice(0, 3).map((p, i) => (
            <FadeUp key={p.slug} delay={i * 0.1}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="card-luxury block group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 relative">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium">{p.date}</p>
                  <h3 className="font-display font-semibold text-xl mt-2 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-xs uppercase tracking-widest text-gold font-medium group-hover:gap-2.5 transition-all">
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
        <SectionTitle eyebrow="Overview of Services" title="About Sir Wolfdogg's services" />
        <div className="grid lg:grid-cols-3 gap-6">
          <FadeUp>
            <div className="card-luxury p-8 h-full flex flex-col justify-between">
              <div>
                <div className="relative overflow-hidden rounded-3xl shadow-elegant luxury-border">
                  <img src={editingImage} alt="Sir Wolfdogg Lanier-French" className="h-72 w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-gold font-semibold">About Sir Wolfdogg's services</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  With over 30 years of experience as a writer and editor, I've helped businesses and individuals achieve their content goals. Let's work together! Bring your vision to life.
                </p>
              </div>
              <Link to="/about" className="btn-gold mt-8 inline-flex justify-center">
                Learn More
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="card-luxury p-8 h-full flex flex-col">
              <div className="relative overflow-hidden rounded-3xl shadow-elegant luxury-border">
                <img src={consultingImage} alt="Consulting service" className="h-64 w-full object-cover" loading="lazy" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground font-semibold">Consulting</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                I offer personalized consulting services to help you develop your writing skills, build your brand, and achieve your content marketing goals. From brainstorming sessions to strategy development, I'll be your partner every step of the way.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="card-luxury p-8 h-full flex flex-col">
              <div className="relative overflow-hidden rounded-3xl shadow-elegant luxury-border">
                <img src={consultingImage2} alt="Editing and proofreading service" className="h-64 w-full object-cover" loading="lazy" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground font-semibold">Editing and Proofreading</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                I provide comprehensive editing and proofreading services to ensure your content is error-free, polished, and professional. Whether you need a quick proofread or a deep dive into your manuscript, I've got you covered.
              </p>
              <Link to="/about" className="mt-6 inline-flex text-gold hover:underline">
                Scholarly Fiction Defined
              </Link>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Scholarly Fiction is written to be both mentally stimulating and disturbing. Factual stories leave little to one's imagination! Fictional stories, most times, leave too much! Regardless of individual imaginations, interpretive acceptance is attained when everyone acknowledges different ideologies of thought.
              </p>
              <blockquote className="mt-6 border-l-2 border-gold pl-4 text-sm italic text-foreground/80">
                "The Unexpressed Realities of Inner Thoughts!"
              </blockquote>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Sir Wolfdogg Lanier-French</p>
            </div>
          </FadeUp>
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-gold">Open Bookstore</Link>
              <Link to="/contact" className="btn-outline-gold">Get In Touch</Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
              <div className="relative card-luxury aspect-square flex items-center justify-center p-12">
                <div className="text-center">
                  <QrCode className="h-40 w-40 mx-auto text-gold anim-float" strokeWidth={1} />
                </div>
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
              <div className="card-luxury p-8 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-gold-soft border border-gold/20 mb-2">
                  <Calendar className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.duration}</p>
                <p className="mt-5 font-display text-3xl text-gradient-gold font-semibold">{a.price}</p>
                <Link to="/contact" className="btn-gold mt-7 w-full justify-center">Schedule</Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  );
}
