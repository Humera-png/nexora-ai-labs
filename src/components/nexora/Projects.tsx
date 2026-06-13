import { motion } from "framer-motion";
import Section from "./Section";

const projects = [
  {
    name: "Jarvis AI",
    tagline: "AI desktop automation assistant",
    problem: "Knowledge workers lose hours to repetitive desktop tasks.",
    solution: "A natural-language assistant that drives applications and OS workflows autonomously.",
    tech: ["Python", "OpenAI API", "NLP", "Automation"],
    impact: "8.4 hrs/week reclaimed per user in pilot.",
  },
  {
    name: "FlowSync",
    tagline: "Automation SaaS platform",
    problem: "Operations teams glue together disconnected SaaS tools manually.",
    solution: "A multi-tenant automation engine with visual flows and a typed API layer.",
    tech: ["React", "Node.js", "REST APIs"],
    impact: "12× faster integration shipping for ops teams.",
  },
  {
    name: "B2B Management System",
    tagline: "Enterprise workflow platform",
    problem: "Mid-market companies outgrow spreadsheets but can't justify legacy ERPs.",
    solution: "A modular workflow platform with auth, RBAC, dashboards, and audit trails.",
    tech: ["React", "Node.js", "PostgreSQL"],
    impact: "Replaced 6 internal tools at first enterprise deployment.",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Case Studies"
      title={<>Engineered, shipped, <span className="text-gradient">in production</span></>}
      description="A look at recent systems we've built. Each one began as a hard problem and shipped as a measurable outcome."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass hover-lift group relative flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative h-40 overflow-hidden border-b border-white/5 bg-[#050B18]">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.4),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.3),transparent_60%)]" />
              <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                project / {String(i + 1).padStart(2, "0")}
              </div>
              <div className="absolute bottom-5 left-5">
                <div className="text-xl font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.tagline}</div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Problem</div>
                <div className="mt-1 text-sm text-foreground/90">{p.problem}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Solution</div>
                <div className="mt-1 text-sm text-foreground/90">{p.solution}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Impact</div>
                <div className="mt-1 text-sm text-foreground/90">{p.impact}</div>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
