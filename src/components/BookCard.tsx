import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Book } from "@/lib/cart";
import { useCart } from "@/lib/cart";

export default function BookCard({ book, index = 0 }: { book: Book; index?: number }) {
  const { add } = useCart();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-card luxury-border rounded-lg overflow-hidden hover:shadow-gold transition-all duration-500"
    >
      <Link to="/shop/$id" params={{ id: book.id }} className="block aspect-[2/3] overflow-hidden bg-secondary">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-1">{book.category}</p>
        <Link to="/shop/$id" params={{ id: book.id }}>
          <h3 className="font-display text-lg text-foreground hover:text-gold transition-colors line-clamp-1">
            {book.title}
          </h3>
        </Link>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gold font-display text-xl">${book.price.toFixed(2)}</span>
          <button
            onClick={() => add(book)}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
