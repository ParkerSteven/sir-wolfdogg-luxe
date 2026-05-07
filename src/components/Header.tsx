import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, ChevronDown, User, Search } from "lucide-react";
import logo from "@/assets/logo.webp";
import { useCart } from "@/lib/cart";

const PRIMARY = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
] as const;

const SHOP_MENU = [
  { to: "/shop", label: "All Books", desc: "Browse the full catalog" },
  { to: "/cart", label: "Cart", desc: "Review your items" },
  { to: "/checkout", label: "Checkout", desc: "Complete your order" },
];

const COMMUNITY_MENU = [
  { to: "/blog", label: "Blog", desc: "Latest writings & insights" },
  { to: "/forum", label: "Forum", desc: "Join the community" },
  { to: "/guide", label: "User Guide", desc: "Resources & how-tos" },
  { to: "/faq", label: "FAQ", desc: "Frequently asked questions" },
];

const SUPPORT = [
  { to: "/donation", label: "Donate" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  const isActive = (to: string) => loc.pathname === to;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-elegant" : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-gold rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            <img src={logo} alt="Sir Wolfdogg" className="relative h-12 w-12 rounded-full ring-2 ring-gold/50 group-hover:ring-gold transition-all" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg text-gradient-gold tracking-tight font-semibold">Sir Wolfdogg</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Bookstore</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {PRIMARY.map((n) => (
            <NavLink key={n.to} to={n.to} active={isActive(n.to)}>{n.label}</NavLink>
          ))}
          <Dropdown label="Shop" items={SHOP_MENU} active={["/shop","/cart","/checkout"].includes(loc.pathname)} />
          <Dropdown label="Community" items={COMMUNITY_MENU} active={["/blog","/forum","/guide","/faq"].includes(loc.pathname)} />
          {SUPPORT.map((n) => (
            <NavLink key={n.to} to={n.to} active={isActive(n.to)}>{n.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="hidden md:inline-flex p-2.5 rounded-full text-foreground/70 hover:text-gold hover:bg-secondary/60 transition-colors">
            <Search className="h-4.5 w-4.5" />
          </button>
          <Link
            to="/cart"
            className="relative p-2.5 rounded-full hover:bg-secondary/60 transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5 text-gold" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-5 w-5 rounded-full bg-gradient-gold text-primary-foreground text-[10px] font-bold flex items-center justify-center shadow-gold">
                {count}
              </span>
            )}
          </Link>
          <Link to="/account" className="hidden md:inline-flex p-2.5 rounded-full text-foreground/70 hover:text-gold hover:bg-secondary/60 transition-colors" aria-label="Account">
            <User className="h-4.5 w-4.5" />
          </Link>
          <Link to="/shop" className="hidden md:inline-flex btn-gold !py-2.5 !px-5 ml-1">
            Shop Now
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2.5 rounded-full text-gold hover:bg-secondary/60"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${open ? "max-h-[80vh]" : "max-h-0"}`}
      >
        <div className="glass border-t border-gold/15 px-4 py-5 grid gap-1">
          {[...PRIMARY, ...SHOP_MENU, ...COMMUNITY_MENU, ...SUPPORT, { to: "/account", label: "My Account" }].map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`px-4 py-3 rounded-lg text-sm tracking-wide transition-colors ${
                isActive(n.to) ? "bg-gradient-gold-soft text-gold" : "text-foreground/85 hover:text-gold hover:bg-secondary/40"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/shop" className="btn-gold mt-3 justify-center">Shop Now</Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors ${
        active ? "text-gold" : "text-foreground/80 hover:text-gold"
      }`}
    >
      {children}
      {active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-gold rounded-full" />}
    </Link>
  );
}

function Dropdown({ label, items, active }: { label: string; items: { to: string; label: string; desc?: string }[]; active: boolean }) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors ${
          active ? "text-gold" : "text-foreground/80 hover:text-gold"
        }`}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="glass rounded-2xl p-2 w-72 shadow-elegant">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-gradient-gold-soft hover:text-gold transition-colors"
            >
              <span className="text-sm font-medium">{it.label}</span>
              {it.desc && <span className="text-xs text-muted-foreground">{it.desc}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
