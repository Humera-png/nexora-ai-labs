import { motion } from "framer-motion";
import Section from "./Section";

const groups = [
  { label: "Frontend", items: ["React", "Next.js concepts", "JavaScript", "Modern CSS"] },
  { label: "Backend", items: ["Node.js", "Python", "FastAPI"] },
  { label: "AI", items: ["OpenAI APIs", "LLM Systems", "AI Agents", "Prompt Engineering"] },
  { label: "Cloud", items: ["AWS", "Docker", "CI / Deployment"] },
];

export default function Technology() {
  return (
    <Section
      id="technology"
      eyebrow="Technology Constellation"
      title={<>The stack behind every <span className="text-gradient">system</span></>}
      description="A connected ecosystem of tools we use to engineer intelligent products end to end."
    >
      <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.9)]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  {g.label}
                </span>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="group flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm transition-colors hover:border-[#2563EB]/30 hover:bg-white/[0.04]">
                    <span>{it}</span>
                    <span className="text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">●</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
