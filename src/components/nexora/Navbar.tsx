import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
  { label: "Home", to: "/" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Technology", to: "/technology" as const },
  { label: "Contact", to: "/contact" as const },
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
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const }}
      className="fixed left-1/2 top-4 z-50 w-[min(100%-1rem,1180px)] -translate-x-1/2 px-2"
    >
      <nav
        className={`glass-strong flex w-full items-center justify-between gap-4 rounded-full px-3 py-2 transition-shadow ${
          scrolled ? "shadow-[0_10px_40px_-10px_rgba(37,99,235,0.35)]" : ""
        }`}
      >
        {/* LEFT — Brand */}
        <Link to="/" className="flex shrink-0 items-center gap-2 rounded-full px-2 py-1.5">
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] blur-[6px] opacity-80" />
            <span className="relative h-3 w-3 rounded-full bg-white" />
          </span>
          <span className="font-display text-lg leading-none tracking-tight">
            Nexora <span className="serif-italic text-muted-foreground">Labs</span>
          </span>
        </Link>

        {/* CENTER — Nav links */}
        <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {items.map((it) => (
            <li key={it.to}>
              <Link
                to={it.to}
                activeOptions={{ exact: true }}
                activeProps={{
                  className:
                    "rounded-full px-3.5 py-1.5 text-sm text-foreground bg-white/[0.06] border border-white/10",
                }}
                inactiveProps={{
                  className:
                    "rounded-full px-3.5 py-1.5 text-sm text-muted-foreground border border-transparent hover:bg-white/5 hover:text-foreground transition-colors",
                }}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA */}
        <Link
          to="/contact"
          className="shrink-0 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#020617] transition-transform hover:scale-[1.03]"
        >
          Start a project
        </Link>
      </nav>
    </motion.header>
  );
}
