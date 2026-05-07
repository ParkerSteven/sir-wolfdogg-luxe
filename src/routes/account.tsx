import { createFileRoute, Link } from "@tanstack/react-router";
import { User, Package, Heart, Settings, LogOut } from "lucide-react";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account — Sir Wolfdogg" }] }),
  component: Account,
});

function Account() {
  return (
    <Section>
      <h1 className="font-display text-4xl text-gradient-gold mb-10">My Account</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <aside className="luxury-border rounded-xl p-6 bg-card h-fit">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display text-xl">L</div>
            <div>
              <div className="font-display text-lg">Welcome back</div>
              <div className="text-xs text-muted-foreground">guest@sirwolfdogg.com</div>
            </div>
          </div>
          <nav className="mt-6 space-y-1 text-sm">
            {[
              { icon: User, label: "Profile" },
              { icon: Package, label: "Orders" },
              { icon: Heart, label: "Wishlist" },
              { icon: Settings, label: "Settings" },
              { icon: LogOut, label: "Sign Out" },
            ].map(({ icon: Icon, label }) => (
              <button key={label} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-secondary text-foreground/80 hover:text-gold transition-colors text-left">
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </nav>
        </aside>
        <div className="md:col-span-2 space-y-6">
          <div className="luxury-border rounded-xl p-6 bg-card">
            <h2 className="font-display text-xl text-gold mb-4">Recent Orders</h2>
            <p className="text-sm text-muted-foreground">You have no recent orders. <Link to="/shop" className="text-gold">Start shopping</Link>.</p>
          </div>
          <div className="luxury-border rounded-xl p-6 bg-card">
            <h2 className="font-display text-xl text-gold mb-4">Account Details</h2>
            <dl className="grid sm:grid-cols-2 gap-4 text-sm">
              <div><dt className="text-muted-foreground text-xs uppercase tracking-widest">Name</dt><dd>Guest User</dd></div>
              <div><dt className="text-muted-foreground text-xs uppercase tracking-widest">Email</dt><dd>guest@sirwolfdogg.com</dd></div>
              <div><dt className="text-muted-foreground text-xs uppercase tracking-widest">Member Since</dt><dd>2026</dd></div>
              <div><dt className="text-muted-foreground text-xs uppercase tracking-widest">Status</dt><dd className="text-gold">Active</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
