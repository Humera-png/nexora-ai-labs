import { motion } from "framer-motion";
import { Bot, Brain, Workflow, Boxes, Layers } from "lucide-react";
import Section from "./Section";

const modules = [
  { icon: Bot, name: "AI Agents", desc: "Autonomous intelligent workflows that handle complex business tasks end-to-end." },
  { icon: Brain, name: "LLM Application Engineering", desc: "GPT-powered applications, assistants, and intelligent systems built for production." },
  { icon: Workflow, name: "AI Automation Infrastructure", desc: "Business workflow automation wired into your APIs, data, and tooling." },
  { icon: Boxes, name: "AI SaaS Products", desc: "Complete AI products from MVP architecture to scalable multi-tenant platforms." },
  { icon: Layers, name: "Full-Stack Product Engineering", desc: "Frontend, backend, databases, APIs, and cloud — engineered as one cohesive system." },
];

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="AI Systems"
      title={<>Modules of an <span className="text-gradient">intelligent</span> stack</>}
      description="Each module is engineered as a composable system — designed to operate independently or fuse into a unified intelligence layer."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="glass hover-lift group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.35),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-[#2563EB]/30 to-[#7C3AED]/30">
                <m.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                /system_{String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="relative mt-5 text-xl font-semibold tracking-tight">{m.name}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            <div className="relative mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Operational
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
