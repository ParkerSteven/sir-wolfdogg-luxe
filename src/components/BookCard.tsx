import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowUpRight } from "lucide-react";
import type { Book } from "@/lib/cart";
import { useCart } from "@/lib/cart";

export default function BookCard({ book, index = 0 }: { book: Book; index?: number }) {
  const { add } = useCart();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="card-luxury group overflow-hidden"
    >
      <Link to="/shop/$id" params={{ id: book.id }} className="relative block aspect-[2/3] overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-gold border border-gold/20 backdrop-blur-md">
          {book.category}
        </span>
        <span className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-gold">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>

      <div className="relative p-6 bg-background/80 border-t border-white/10 backdrop-blur-md">
        <Link to="/shop/$id" params={{ id: book.id }}>
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gold transition-colors line-clamp-1">
            {book.title}
          </h3>
        </Link>
        {book.subtitle ? (
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground line-clamp-2">
            {book.subtitle}
          </p>
        ) : null}
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="font-display text-2xl font-semibold text-gradient-gold">${book.price.toFixed(2)}</span>
          <button
            onClick={() => add(book)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-[11px] uppercase tracking-widest font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
          >
            <ShoppingBag className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
