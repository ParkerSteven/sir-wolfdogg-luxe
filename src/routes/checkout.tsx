import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Sir Wolfdogg" }] }),
  component: Checkout,
});

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-1 w-full bg-input border border-gold/20 rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
      />
    </label>
  );
}

function Checkout() {
  const { items, total, clear } = useCart();
  const nav = useNavigate();
  const [placing, setPlacing] = useState(false);

  if (items.length === 0) {
    return (
      <Section>
        <div className="text-center">
          <h1 className="font-display text-3xl text-gold">Your cart is empty</h1>
          <Link to="/shop" className="inline-block mt-6 text-gold underline">Continue shopping</Link>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <h1 className="font-display text-4xl text-gradient-gold mb-10">Checkout</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPlacing(true);
          setTimeout(() => { clear(); nav({ to: "/account" }); }, 1200);
        }}
        className="grid lg:grid-cols-3 gap-10"
      >
        <div className="lg:col-span-2 space-y-8">
          <div className="luxury-border rounded-xl p-6 bg-card">
            <h2 className="font-display text-xl text-gold mb-5">Contact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Email" type="email" required />
              <Field label="Phone" type="tel" required />
            </div>
          </div>
          <div className="luxury-border rounded-xl p-6 bg-card">
            <h2 className="font-display text-xl text-gold mb-5">Shipping</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First Name" required />
              <Field label="Last Name" required />
              <Field label="Address" required />
              <Field label="City" required />
              <Field label="State" required />
              <Field label="ZIP" required />
            </div>
          </div>
          <div className="luxury-border rounded-xl p-6 bg-card">
            <h2 className="font-display text-xl text-gold mb-5 flex items-center gap-2"><Lock className="h-4 w-4" /> Payment</h2>
            <div className="grid gap-4">
              <Field label="Card Number" placeholder="1234 5678 9012 3456" required />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Expiry" placeholder="MM/YY" required />
                <Field label="CVC" placeholder="123" required />
              </div>
              <p className="text-xs text-muted-foreground">Stripe integration placeholder — no real card processed.</p>
            </div>
          </div>
        </div>
        <aside className="luxury-border rounded-xl p-6 bg-card h-fit">
          <h2 className="font-display text-xl text-gold mb-6">Order</h2>
          <div className="space-y-3">
            {items.map(({ book, qty }) => (
              <div key={book.id} className="flex justify-between text-sm">
                <span>{book.title} × {qty}</span>
                <span>${(book.price * qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gold/20 my-4" />
          <div className="flex justify-between font-display text-xl"><span>Total</span><span className="text-gradient-gold">${total.toFixed(2)}</span></div>
          <button disabled={placing} className="mt-6 w-full px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md shadow-gold disabled:opacity-60">
            {placing ? "Placing Order..." : "Place Order"}
          </button>
        </aside>
      </form>
    </Section>
  );
}
