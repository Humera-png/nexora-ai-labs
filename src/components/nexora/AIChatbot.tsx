import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";

type Msg = { role: "ai" | "user"; text: string };

const steps = [
  { key: "name", q: "Great to meet you — what's your name?" },
  { key: "company", q: "Which company are you with?" },
  { key: "idea", q: "Tell me about the project idea you have in mind." },
  { key: "budget", q: "Roughly what budget range are you working with?" },
  { key: "timeline", q: "What timeline are you targeting?" },
  { key: "email", q: "Last one — what's the best email to reach you?" },
] as const;

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(-1);
  const [input, setInput] = useState("");
  const [data, setData] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "Hi, I'm Nexora AI Assistant. Tell me about your idea and I'll help you understand how we can build it." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const start = () => {
    if (step !== -1) return;
    setStep(0);
    setMessages((m) => [...m, { role: "ai", text: steps[0].q }]);
  };

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);

    if (step === -1) { start(); return; }

    const current = steps[step];
    const nextData = { ...data, [current.key]: text };
    setData(nextData);

    setTimeout(() => {
      if (step + 1 < steps.length) {
        setStep(step + 1);
        setMessages((m) => [...m, { role: "ai", text: steps[step + 1].q }]);
      } else {
        setStep(steps.length);
        setMessages((m) => [
          ...m,
          {
            role: "ai",
            text: `Perfect — thanks ${nextData.name?.split(" ")[0] || "there"}. I've logged your brief. An engineer from Nexora will reach out at ${nextData.email} within 24 hours.`,
          },
        ]);
      }
    }, 400);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
        onClick={() => { setOpen(true); start(); }}
        aria-label="Open AI assistant"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full"
      >
        <span className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] blur-xl" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-[0_0_30px_rgba(37,99,235,0.6)]">
          <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_10px_#fff]" />
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] as const }}
            className="glass-strong fixed bottom-24 right-6 z-40 flex h-[520px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] blur-md opacity-80" />
                  <span className="relative h-3 w-3 rounded-full bg-white" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Nexora AI Assistant</div>
                  <div className="text-[11px] text-muted-foreground">Online · ~1s response</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-full p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white"
                        : "border border-white/10 bg-white/[0.03] text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-4 pr-1">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type your message…"
                  className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground/70 focus:outline-none"
                />
                <button onClick={send} className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                  <Send className="h-3.5 w-3.5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
