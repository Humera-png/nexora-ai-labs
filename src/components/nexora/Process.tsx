import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";

const steps = [
  { code: "T-00", title: "Discovery",      desc: "Problem framing, success metrics, technical feasibility." },
  { code: "T-01", title: "Architecture",   desc: "System design, data model, AI orchestration topology." },
  { code: "T-02", title: "Development",    desc: "Engineering the product surface and backend services." },
  { code: "T-03", title: "AI Integration", desc: "Model selection, prompt engineering, evaluation loops." },
  { code: "T-04", title: "Testing",        desc: "Automated, adversarial, and user acceptance validation." },
  { code: "T-05", title: "Launch",         desc: "Deployment, observability, and continuous iteration." },
];

const telemetryBank = [
  "Initializing neural routing matrix…",
  "Compiling vector pathways · T-{p}",
  "Synchronizing cognitive modules…",
  "Resolving dependency graph · 412 nodes",
  "Calibrating inference budget · 12ms",
  "Streaming telemetry → core.nexora-r1",
  "Loading agent.swarm · 24 / 24 online",
  "Indexing eval set · 2,184 prompts",
  "Hardening guardrails · safety v3.2",
  "Provisioning edge fabric · 3 regions",
  "Materializing context window · 200K",
  "Distilling policy · reward Δ +0.034",
];

export default function Process() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([]);

  // Scroll-driven phase selection inside the section.
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress 0..1 across the section's vertical travel
      const total = r.height - vh;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -r.top / total));
      const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Telemetry feed — adds a line every ~1.4s, swapping in current phase code.
  useEffect(() => {
    const id = setInterval(() => {
      setLogs((prev) => {
        const next = telemetryBank[Math.floor(Math.random() * telemetryBank.length)]
          .replace("{p}", steps[active].code);
        const ts = new Date().toISOString().slice(11, 19);
        return [...prev.slice(-7), `${ts}  ${next}`];
      });
    }, 1400);
    return () => clearInterval(id);
  }, [active]);

  const phaseAngles = useMemo(
    () => steps.map((_, i) => (i / steps.length) * Math.PI * 2 - Math.PI / 2),
    []
  );

  return (
    <div ref={sectionRef} className="relative" style={{ height: `${steps.length * 70}vh` }}>
      <div className="sticky top-0 flex h-screen items-center">
        <Section
          eyebrow="Mission Sequence"
          title={<>Our <span className="text-amber">clockwork</span> launch sequence</>}
          description="A disciplined rotation of phases — every cycle de-risks the next. Scroll to advance the carousel."
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            {/* Clockwork carousel */}
            <div className="relative mx-auto aspect-square w-full max-w-[480px]">
              {/* dial rings */}
              <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
              <div className="absolute inset-6 rounded-full border border-dashed border-white/[0.07]" style={{ animation: "orbit-spin 60s linear infinite" }} />
              <div className="absolute inset-16 rounded-full border border-white/[0.06]" />
              {/* tick marks */}
              {Array.from({ length: 60 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 origin-bottom"
                  style={{
                    width: 1,
                    height: i % 5 === 0 ? 14 : 6,
                    background: i % 5 === 0 ? "rgba(255,191,0,0.45)" : "rgba(255,255,255,0.12)",
                    transform: `translate(-50%, -100%) rotate(${(i / 60) * 360}deg) translateY(-44%)`,
                  }}
                />
              ))}

              {/* phase nodes orbiting */}
              {steps.map((s, i) => {
                const a = phaseAngles[i];
                const radius = 42; // % of container
                const isActive = i === active;
                const cx = 50 + Math.cos(a) * radius;
                const cy = 50 + Math.sin(a) * radius;
                return (
                  <motion.button
                    key={s.code}
                    onClick={() => setActive(i)}
                    initial={false}
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      opacity: isActive ? 1 : 0.55,
                    }}
                    transition={{ type: "spring", stiffness: 160, damping: 18 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ left: `${cx}%`, top: `${cy}%` }}
                  >
                    <span
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border font-mono text-[10px] tracking-[0.1em] transition-colors ${
                        isActive
                          ? "border-[#FFBF00]/70 bg-[#FFBF00]/10 text-[#FFBF00] glow-amber"
                          : "border-white/15 bg-white/[0.03] text-muted-foreground"
                      }`}
                    >
                      {s.code}
                      {isActive && (
                        <span className="pointer-events-none absolute -inset-2 rounded-full border border-[#FFBF00]/30 animate-ping" />
                      )}
                    </span>
                  </motion.button>
                );
              })}

              {/* center stage */}
              <div className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={steps[active].code}
                    initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] as const }}
                    className="glass-strong scanline rounded-2xl p-5 text-center"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FFBF00]">
                      Phase {steps[active].code}
                    </div>
                    <div className="mt-2 font-display text-2xl tracking-tight">{steps[active].title}</div>
                    <div className="mx-auto mt-1 h-px w-12 bg-[#FFBF00]/40" />
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{steps[active].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Telemetry feed */}
            <div className="glass-strong rounded-2xl p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FFBF00] shadow-[0_0_10px_#FFBF00]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    telemetry · core.nexora-r1
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#FFBF00]">live</span>
              </div>

              <div className="mt-4 h-56 overflow-hidden font-mono text-[11px] leading-relaxed text-muted-foreground [mask-image:linear-gradient(180deg,transparent,#000_18%,#000_85%,transparent)]">
                <AnimatePresence initial={false}>
                  {logs.map((l, i) => (
                    <motion.div
                      key={l + i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-2"
                    >
                      <span className="text-[#FFBF00]/70">›</span>
                      <span>{l}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                <Metric label="phase" value={steps[active].code} />
                <Metric label="cycle" value={`${active + 1}/${steps.length}`} />
                <Metric label="status" value="nominal" amber />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Metric({ label, value, amber }: { label: string; value: string; amber?: boolean }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
      <div className={`mt-1 font-mono text-sm ${amber ? "text-[#FFBF00]" : "text-foreground"}`}>{value}</div>
    </div>
  );
}
