import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { label: "Solutions", href: "#solutions" },
  { label: "AI Systems", href: "#capabilities" },
  { label: "Technology", href: "#technology" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-4"
    >
      <nav
        className={`glass-strong flex items-center gap-1 rounded-full px-2 py-2 transition-all ${
          scrolled ? "shadow-[0_10px_40px_-10px_rgba(37,99,235,0.35)]" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 rounded-full px-3 py-1.5">
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] blur-[6px] opacity-80" />
            <span className="relative h-3 w-3 rounded-full bg-white" />
          </span>
          <span className="text-sm font-semibold tracking-tight">Nexora Labs</span>
        </a>
        <div className="mx-1 hidden h-5 w-px bg-white/10 md:block" />
        <ul className="hidden items-center md:flex">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-1 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#020617] transition-transform hover:scale-[1.03]"
        >
          Start a project
        </a>
      </nav>
    </motion.header>
  );
}
