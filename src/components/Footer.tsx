import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.webp";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.08_0.005_60)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Newsletter band */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16">
          <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center shadow-elegant">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Stay in the loop</p>
              <h3 className="font-display text-3xl md:text-4xl text-gradient-gold leading-tight">
                Join the Sir Wolfdogg Circle
              </h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-md">
                Exclusive updates on new releases, speaking events, and timeless leadership insights — direct to your inbox.
              </p>
            </div>
            <form onSubmit={onSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-background/60 border border-gold/20 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                {subscribed ? "Subscribed ✓" : (<>Subscribe <Send className="h-3.5 w-3.5" /></>)}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-full blur-md opacity-50" />
              <img src={logo} alt="Sir Wolfdogg" className="relative h-14 w-14 rounded-full ring-2 ring-gold/50" />
            </div>
            <div>
              <div className="font-display text-xl text-gradient-gold font-semibold">Sir Wolfdogg</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Bookstore</div>
            </div>
          </Link>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
            Author. Speaker. Mentor. Crafting timeless works rooted in integrity, leadership, and legacy — for the next generation of bold leaders.
          </p>
          <div className="flex gap-2.5 mt-6">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="group p-2.5 rounded-xl glass hover:bg-gradient-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
              >
                <Icon className="h-4 w-4 text-gold group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About" },
              { to: "/shop", label: "Bookstore" },
              { to: "/blog", label: "Blog" },
              { to: "/forum", label: "Forum" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="inline-flex items-center gap-1 hover:text-gold transition-colors group">
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-5">Support</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/faq", label: "FAQ" },
              { to: "/guide", label: "User Guide" },
              { to: "/donation", label: "Donate" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="inline-flex items-center gap-1 hover:text-gold transition-colors group">
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-5">Get In Touch</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-gradient-gold-soft border border-gold/20"><Mail className="h-4 w-4 text-gold" /></span>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Email</div>
                <a href="mailto:Laniersr497@aol.com" className="hover:text-gold transition-colors">Laniersr497@aol.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-gradient-gold-soft border border-gold/20"><Phone className="h-4 w-4 text-gold" /></span>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Phone</div>
                <a href="tel:7038632772" className="hover:text-gold transition-colors">703-863-2772</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-gradient-gold-soft border border-gold/20"><MapPin className="h-4 w-4 text-gold" /></span>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Location</div>
                <span>Virginia, United States</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SirWolfdoggBookstore.com — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
