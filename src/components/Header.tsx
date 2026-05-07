import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.webp";
import { useCart } from "@/lib/cart";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/blog", label: "Blog" },
  { to: "/forum", label: "Forum" },
  { to: "/guide", label: "User Guide" },
  { to: "/faq", label: "FAQ" },
  { to: "/donation", label: "Donate" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sir Wolfdogg" className="h-12 w-12 rounded-full ring-2 ring-gold/40" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg text-gold tracking-wide">Sir Wolfdogg</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Bookstore</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${
                loc.pathname === n.to ? "text-gold" : "text-foreground/80"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5 text-gold" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-gold text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <Link
            to="/account"
            className="hidden md:inline-flex text-xs uppercase tracking-widest text-foreground/70 hover:text-gold"
          >
            Account
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-gold"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-background">
          <div className="px-4 py-4 grid gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm tracking-wide text-foreground/80 hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/account" onClick={() => setOpen(false)} className="py-2 text-sm text-foreground/80 hover:text-gold">
              My Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
