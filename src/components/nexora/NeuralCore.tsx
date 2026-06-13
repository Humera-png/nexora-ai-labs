import { motion } from "framer-motion";

/** Decorative animated neural processing core for the hero. */
export default function NeuralCore() {
  const nodes = [
    { cx: 200, cy: 60 },
    { cx: 340, cy: 140 },
    { cx: 360, cy: 280 },
    { cx: 240, cy: 360 },
    { cx: 80, cy: 300 },
    { cx: 60, cy: 160 },
    { cx: 180, cy: 220 },
    { cx: 280, cy: 220 },
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
    [0, 6], [1, 7], [2, 7], [3, 6], [4, 6], [5, 6], [6, 7],
  ];

  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.35),transparent_60%)] blur-2xl" />
      <motion.div
        className="absolute inset-8 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-20 rounded-full border border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
      <svg viewBox="0 0 420 420" className="relative h-full w-full">
        <defs>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#2563EB" />
          </radialGradient>
          <linearGradient id="edge" x1="0" x2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="url(#edge)" strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.06 }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.cx} cy={n.cy} r="14"
              fill="#2563EB" opacity="0.25"
              animate={{ r: [12, 20, 12], opacity: [0.25, 0.05, 0.25] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
            />
            <circle cx={n.cx} cy={n.cy} r="5" fill="url(#node)" />
          </g>
        ))}
        <circle cx="210" cy="210" r="32" fill="url(#node)" opacity="0.9" />
        <motion.circle
          cx="210" cy="210" r="48" fill="none" stroke="#7C3AED" strokeWidth="1"
          animate={{ r: [40, 70, 40], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
