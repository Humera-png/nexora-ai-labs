import { motion } from "framer-motion";
import Section from "./Section";

const steps = [
  { code: "T-00", title: "Discovery", desc: "Problem framing, success metrics, technical feasibility." },
  { code: "T-01", title: "Architecture", desc: "System design, data model, AI orchestration topology." },
  { code: "T-02", title: "Development", desc: "Engineering the product surface and backend services." },
  { code: "T-03", title: "AI Integration", desc: "Model selection, prompt engineering, evaluation loops." },
  { code: "T-04", title: "Testing", desc: "Automated, adversarial, and user acceptance validation." },
  { code: "T-05", title: "Launch", desc: "Deployment, observability, and continuous iteration." },
];

export default function Process() {
  return (
    <Section
      eyebrow="Mission Sequence"
      title={<>Our <span className="text-gradient">launch</span> sequence</>}
      description="A disciplined sequence borrowed from mission engineering — every phase de-risks the next."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#2563EB]/60 via-white/10 to-transparent md:left-1/2 md:block" />
        <ul className="space-y-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative grid items-center gap-4 md:grid-cols-2 ${
                i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
              }`}
            >
              <div className={`glass rounded-2xl p-6 ${i % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{s.code}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <div className="hidden md:block" />
              <span className="absolute left-4 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-[0_0_18px_rgba(37,99,235,0.9)] md:left-1/2 md:block" />
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
