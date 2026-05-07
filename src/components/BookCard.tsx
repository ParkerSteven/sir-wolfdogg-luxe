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
      className="card-luxury group"
    >
      <Link to="/shop/$id" params={{ id: book.id }} className="relative block aspect-[2/3] overflow-hidden bg-secondary/40">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] glass text-gold font-medium">
          {book.category}
        </span>
        <span className="absolute top-3 right-3 p-2 rounded-full bg-gradient-gold text-primary-foreground opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-gold">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>
      <div className="relative p-5">
        <Link to="/shop/$id" params={{ id: book.id }}>
          <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-gold transition-colors line-clamp-1">
            {book.title}
          </h3>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-gradient-gold">${book.price.toFixed(2)}</span>
          <button
            onClick={() => add(book)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] uppercase tracking-widest font-medium border border-gold/30 text-gold hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition-all"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
