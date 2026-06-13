import { motion } from "framer-motion";
import { Shield, Cpu, Rocket } from "lucide-react";
import Section from "./Section";

const cards = [
  { icon: Shield, title: "Engineering Excellence", desc: "We build reliable systems, not temporary demos." },
  { icon: Cpu, title: "AI + Product Thinking", desc: "We combine artificial intelligence with real software engineering." },
  { icon: Rocket, title: "Future-Ready Architecture", desc: "We create technology designed to scale." },
];

export default function WhyNexora() {
  return (
    <Section
      eyebrow="Why Nexora"
      title={<>A partner you can build the <span className="text-gradient">long arc</span> with</>}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass hover-lift relative overflow-hidden rounded-2xl p-8 text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#2563EB]/30 to-[#7C3AED]/30">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
