import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Github, Linkedin, Twitter } from "lucide-react";
import Section from "./Section";

/**
 * Contact form powered by EmailJS.
 * Configure these via Vite env (VITE_EMAILJS_*) — falls back to placeholders for local dev.
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...form, to_name: "Nexora Labs" }, { publicKey: PUBLIC_KEY });
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const field = "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-[#2563EB]/60 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Have an idea? Let's build something <span className="text-gradient">extraordinary</span>.</>}
      description="Tell us about your project — we usually respond within one business day."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input required placeholder="Your name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
            <input required type="email" placeholder="Email" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
          </div>
          <input placeholder="Company (optional)" value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })} className={`${field} mt-4`} />
          <textarea required placeholder="Tell us about your project..." value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5} className={`${field} mt-4 resize-none`} />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#020617] transition hover:scale-[1.01] disabled:opacity-60"
          >
            {status === "sending" ? "Transmitting…" : "Send Message"}
            <ArrowRight className="h-4 w-4" />
          </button>

          {status === "sent" && <p className="mt-4 text-center text-sm text-emerald-400">Message received. We'll be in touch shortly.</p>}
          {status === "error" && <p className="mt-4 text-center text-sm text-red-400">Couldn't send right now. Please email us directly at hello@nexoralabs.dev.</p>}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <a href="#" className="glass hover-lift flex items-center justify-between rounded-2xl p-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Prefer a call?</div>
              <div className="mt-1 text-lg font-semibold">Schedule a consultation</div>
              <div className="mt-1 text-sm text-muted-foreground">30-min technical discovery</div>
            </div>
            <CalendarCheck className="h-6 w-6" />
          </a>

          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Direct</div>
            <a href="mailto:hello@nexoralabs.dev" className="mt-1 block text-lg font-semibold hover:text-[#93C5FD]">
              hello@nexoralabs.dev
            </a>
            <div className="mt-4 flex gap-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-[#2563EB]/40 hover:bg-white/[0.06]">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.25),transparent_60%)]" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Response time</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight">&lt; 24 hours</div>
              <div className="mt-1 text-sm text-muted-foreground">Engineer-to-founder reply, always.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
