import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-6 py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        {eyebrow && (
          <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </motion.div>
      <div className="mt-16">{children}</div>
    </section>
  );
}
