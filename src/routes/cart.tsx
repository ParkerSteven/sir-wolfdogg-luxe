import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Sir Wolfdogg Bookstore" }] }),
  component: Cart,
});

function Cart() {
  const { items, remove, setQty, total } = useCart();

  if (items.length === 0) {
    return (
      <Section>
        <div className="text-center py-16">
          <h1 className="font-display text-4xl text-gold">Your cart is empty</h1>
          <p className="mt-3 text-muted-foreground">Discover timeless titles from Sir Wolfdogg.</p>
          <Link to="/shop" className="inline-block mt-8 px-7 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md shadow-gold">
            Browse Books
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <h1 className="font-display text-4xl text-gradient-gold mb-10">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ book, qty }) => (
            <div key={book.id} className="flex gap-4 p-4 luxury-border rounded-xl bg-card">
              <Link to="/shop/$id" params={{ id: book.id }} className="shrink-0">
                <img src={book.cover} alt={book.title} className="h-32 w-24 object-cover rounded" />
              </Link>
              <div className="flex-1">
                <Link to="/shop/$id" params={{ id: book.id }} className="font-display text-xl hover:text-gold">{book.title}</Link>
                <p className="text-xs uppercase tracking-widest text-gold/70 mt-1">{book.category}</p>
                <p className="mt-2 text-gold font-display text-lg">${book.price.toFixed(2)}</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center luxury-border rounded-md">
                    <button onClick={() => setQty(book.id, qty - 1)} className="p-2 text-gold"><Minus className="h-3 w-3" /></button>
                    <span className="px-3 text-sm">{qty}</span>
                    <button onClick={() => setQty(book.id, qty + 1)} className="p-2 text-gold"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(book.id)} className="p-2 text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="text-right font-display text-xl text-foreground">
                ${(book.price * qty).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <aside className="luxury-border rounded-xl p-6 bg-card h-fit">
          <h2 className="font-display text-xl text-gold mb-6">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${total.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-gold">Free</span></div>
            <div className="border-t border-gold/20 my-3" />
            <div className="flex justify-between font-display text-xl"><span>Total</span><span className="text-gradient-gold">${total.toFixed(2)}</span></div>
          </div>
          <Link to="/checkout" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md shadow-gold">
            Checkout <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </Section>
  );
}
