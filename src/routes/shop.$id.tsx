import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { getBook, BOOKS } from "@/lib/data";
import { useCart } from "@/lib/cart";
import BookCard from "@/components/BookCard";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/shop/$id")({
  loader: ({ params }) => {
    const book = getBook(params.id);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.book.title ?? "Book"} — Sir Wolfdogg Bookstore` },
      { name: "description", content: loaderData?.book.description ?? "" },
      { property: "og:title", content: loaderData?.book.title ?? "" },
      { property: "og:description", content: loaderData?.book.description ?? "" },
      { property: "og:image", content: loaderData?.book.cover ?? "" },
    ],
  }),
  component: Product,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="font-display text-4xl text-gold">Book Not Found</h1>
      <Link to="/shop" className="inline-block mt-6 text-gold underline">Back to bookstore</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="py-32 text-center">
        <p className="text-destructive">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 text-gold underline">Retry</button>
      </div>
    );
  },
});

function Product() {
  const { book } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const related = BOOKS.filter((b) => b.id !== book.id).slice(0, 4);

  return (
    <>
      <Section>
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-3xl" />
            <img src={book.cover} alt={book.title} className="relative rounded-xl luxury-border shadow-elegant w-full" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{book.category}</p>
            <h1 className="font-display text-4xl sm:text-5xl mt-3 text-foreground">{book.title}</h1>
            {book.subtitle && <p className="mt-2 text-muted-foreground italic">{book.subtitle}</p>}
            <div className="mt-6 font-display text-4xl text-gradient-gold">${book.price.toFixed(2)}</div>
            <p className="mt-6 text-foreground/85 leading-relaxed">{book.description}</p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center luxury-border rounded-md">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 text-gold hover:bg-secondary"><Minus className="h-4 w-4" /></button>
                <span className="px-4 font-display">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 text-gold hover:bg-secondary"><Plus className="h-4 w-4" /></button>
              </div>
              <button
                onClick={() => { for (let i = 0; i < qty; i++) add(book); }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-widest rounded-md shadow-gold"
              >
                <ShoppingBag className="h-4 w-4" /> Add To Cart
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {[
                { k: "Free", v: "USA Shipping" },
                { k: "Signed", v: "Editions" },
                { k: "Secure", v: "Checkout" },
              ].map((b) => (
                <div key={b.v} className="luxury-border rounded-lg p-4">
                  <div className="text-gold font-display">{b.k}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[oklch(0.1_0.005_60)] !pt-12">
        <h2 className="font-display text-2xl text-gold mb-8">You may also enjoy</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
        </div>
      </Section>
    </>
  );
}
