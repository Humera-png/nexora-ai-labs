import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="solutions"
      eyebrow="The Studio"
      title={<>A technology studio for the <span className="text-gradient">AI era</span></>}
      description="Nexora Labs is an engineering studio founded by builders obsessed with shipping AI systems that actually work in production."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <p className="text-lg leading-relaxed text-foreground/90">
              Many teams can wire an AI API to a button. We design the entire system around it —
              the data layer, the orchestration, the agent reasoning, the deployment surface, and
              the product itself.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our approach fuses AI engineering with serious software architecture. The result is
              technology that scales beyond the demo and survives contact with real users.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {[
            ["AI Engineering", "From prompt pipelines to evals and guardrails."],
            ["Product Thinking", "User flows designed around model behavior."],
            ["Scalable Architecture", "Built on durable, observable infrastructure."],
            ["Startup Mindset", "Ship fast, iterate sharper, compound quality."],
          ].map(([t, d], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass flex items-start gap-4 rounded-xl p-5"
            >
              <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
              <div>
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
