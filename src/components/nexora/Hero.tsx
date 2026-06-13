import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeuralCore from "./NeuralCore";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } }),
};

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pt-32">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            initial="hidden" animate="show" custom={0} variants={fade}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2563EB]" />
            Engineering intelligence — operational since 2024
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" custom={1} variants={fade}
            className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[80px]"
          >
            Building <span className="text-gradient">Intelligence</span><br />
            For The Future
          </motion.h1>

          <motion.p
            initial="hidden" animate="show" custom={2} variants={fade}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Nexora Labs engineers AI systems, intelligent applications, and scalable software
            products that transform ideas into real-world technology.
          </motion.p>

          <motion.div
            initial="hidden" animate="show" custom={3} variants={fade}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#020617] transition-transform hover:scale-[1.02]"
            >
              Build With Nexora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground hover:border-white/20"
            >
              Explore Our Work
            </a>
          </motion.div>

          <motion.div
            initial="hidden" animate="show" custom={4} variants={fade}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/5 pt-6"
          >
            {[
              ["12+", "AI systems shipped"],
              ["98%", "Production uptime"],
              ["<2w", "Avg MVP cycle"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="text-2xl font-semibold tracking-tight">{k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="animate-float-slow">
            <NeuralCore />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
