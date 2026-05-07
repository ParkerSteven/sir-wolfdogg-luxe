import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-[oklch(0.1_0.005_60)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Sir Wolfdogg" className="h-12 w-12 rounded-full ring-2 ring-gold/40" />
            <span className="font-display text-gold text-lg">Sir Wolfdogg</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Author. Speaker. Mentor. Crafting timeless works rooted in integrity, leadership, and legacy.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/shop" className="hover:text-gold">Bookstore</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/forum" className="hover:text-gold">Forum</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/guide" className="hover:text-gold">User Guide</Link></li>
            <li><Link to="/donation" className="hover:text-gold">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Reach Out</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> Laniersr497@aol.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 703-863-2772</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SirWolfdoggBookstore.com — All rights reserved.
      </div>
    </footer>
  );
}
