import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Book = {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  cover: string;
  description: string;
  category: string;
};

type CartItem = { book: Book; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (b: Book) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("swd-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("swd-cart", JSON.stringify(items)); } catch {}
  }, [items]);

  const add = (b: Book) =>
    setItems((p) => {
      const ex = p.find((i) => i.book.id === b.id);
      if (ex) return p.map((i) => (i.book.id === b.id ? { ...i, qty: i.qty + 1 } : i));
      return [...p, { book: b, qty: 1 }];
    });
  const remove = (id: string) => setItems((p) => p.filter((i) => i.book.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => p.map((i) => (i.book.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.book.price, 0);

  return <Ctx.Provider value={{ items, add, remove, setQty, clear, count, total }}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("CartProvider missing");
  return c;
};
