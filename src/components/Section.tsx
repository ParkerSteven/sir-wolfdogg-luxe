import { ReactNode } from "react";
import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto mb-16"
    >
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.35em] text-gold bg-gradient-gold-soft border border-gold/20 mb-5">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      {sub && <p className="mt-5 text-muted-foreground leading-relaxed">{sub}</p>}
      <div className="mt-6 mx-auto h-px w-24 bg-gradient-gold rounded-full" />
    </motion.div>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
