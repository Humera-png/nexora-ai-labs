import { motion, type Variants } from "framer-motion";
import { ArrowRight, Activity, Cpu, Sparkles } from "lucide-react";
import NeuralCore from "./NeuralCore";

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const },
  }),
};

const tickerLines = [
  "model.nexora-r1 · inference 12ms",
  "agent.swarm › 24 nodes online",
  "vector.index › 1.2B embeddings",
  "pipeline.train › epoch 184 / 200",
  "deploy.edge › us-east · eu-west · ap-south",
  "telemetry › 99.982% uptime · 30d",
  "model.nexora-r1 · inference 12ms",
  "agent.swarm › 24 nodes online",
  "vector.index › 1.2B embeddings",
  "pipeline.train › epoch 184 / 200",
  "deploy.edge › us-east · eu-west · ap-south",
  "telemetry › 99.982% uptime · 30d",
];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pt-32">
      {/* Backdrop layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_60%)] blur-3xl" />

      <div className="relative grid w-full items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial="hidden" animate="show" custom={0} variants={fade}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2563EB]" />
            NEXORA / R1 — engineering intelligence
          </motion.div>

          <motion.h1
            initial="hidden" animate="show" custom={1} variants={fade}
            className="mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl lg:text-[88px]"
          >
            Building <span className="serif-italic text-gradient">intelligence</span>
            <br />
            for the <span className="serif-italic">future</span>.
          </motion.h1>

          <motion.p
            initial="hidden" animate="show" custom={2} variants={fade}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Nexora Labs is an applied AI engineering studio. We design autonomous agents,
            inference pipelines, and production-grade software for teams building the next
            generation of intelligent systems.
          </motion.p>

          <motion.div
            initial="hidden" animate="show" custom={3} variants={fade}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#020617] transition-transform hover:scale-[1.02]"
            >
              Build with Nexora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground hover:border-white/20"
            >
              Explore our work
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
                <div className="font-display text-3xl tracking-tight">{k}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual side — neural core + orbiting data panels */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          {/* Soft outer ring */}
          <div className="pointer-events-none absolute inset-0 m-auto h-[440px] w-[440px] rounded-full border border-white/[0.06]" />
          <div
            className="pointer-events-none absolute inset-0 m-auto h-[520px] w-[520px] rounded-full border border-dashed border-white/[0.05]"
            style={{ animation: "orbit-spin 80s linear infinite" }}
          />

          <div className="animate-float-slow">
            <NeuralCore />
          </div>

          {/* Top-left status panel */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="glass-strong absolute -left-2 top-4 w-44 rounded-2xl p-3 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.4)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">core</span>
              <Cpu className="h-3 w-3 text-[#93C5FD]" />
            </div>
            <div className="mt-2 font-display text-2xl leading-none">nexora-r1</div>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] text-muted-foreground">ONLINE · 12ms</span>
            </div>
            {/* mini sparkline */}
            <svg viewBox="0 0 100 24" className="mt-2 h-5 w-full">
              <polyline
                points="0,18 10,14 20,16 30,8 40,11 50,5 60,9 70,4 80,7 90,2 100,5"
                fill="none" stroke="#93C5FD" strokeWidth="1.2" strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Right ticker panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="glass absolute -right-2 top-1/2 h-40 w-48 -translate-y-1/2 overflow-hidden rounded-2xl p-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">telemetry</span>
              <Activity className="h-3 w-3 text-[#C4B5FD]" />
            </div>
            <div className="relative mt-2 h-28 overflow-hidden [mask-image:linear-gradient(180deg,transparent,#000_20%,#000_80%,transparent)]">
              <div className="animate-ticker space-y-1.5">
                {tickerLines.map((l, i) => (
                  <div key={i} className="font-mono text-[10px] leading-relaxed text-muted-foreground">
                    <span className="text-[#93C5FD]">›</span> {l}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom-left chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="glass absolute -bottom-2 left-6 flex items-center gap-2 rounded-full px-3 py-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#C4B5FD]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              agent.swarm · 24 nodes
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex">
        <span className="h-px w-8 bg-white/20" />
        scroll to explore
        <span className="h-px w-8 bg-white/20" />
      </div>
    </section>
  );
}
