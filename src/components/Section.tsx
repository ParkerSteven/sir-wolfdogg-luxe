import { ReactNode } from "react";
import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl sm:text-5xl text-foreground">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
      <div className="mt-5 mx-auto h-px w-24 bg-gradient-gold" />
    </div>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
