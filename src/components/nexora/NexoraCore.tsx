import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * NexoraCore — a persistent canvas-rendered generative node that lives behind
 * the entire app. It reacts to cursor proximity and shifts its visual state
 * depending on the active route, reinforcing the sense of a single spatial
 * interface rather than a stack of pages.
 */
export default function NexoraCore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const stateRef = useRef({ intensity: 0.55, rings: 3, hue: 42, target: { intensity: 0.55, rings: 3, hue: 42 } });

  // Map each route to a distinct "energy state" of the Core.
  useEffect(() => {
    const map: Record<string, { intensity: number; rings: number; hue: number }> = {
      "/":          { intensity: 0.65, rings: 3, hue: 42 },
      "/solutions": { intensity: 0.85, rings: 5, hue: 38 },
      "/projects":  { intensity: 0.75, rings: 4, hue: 30 },
      "/technology":{ intensity: 0.95, rings: 6, hue: 48 },
      "/contact":   { intensity: 0.55, rings: 2, hue: 50 },
    };
    const t = map[pathname] ?? map["/"];
    stateRef.current.target = t;
  }, [pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, cx = 0, cy = 0;
    let t = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w / 2;
      cy = h * 0.5;
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const onLeave = () => { mouse.current.active = false; };

    const draw = () => {
      t += 0.008;

      // Ease state values toward their targets for smooth section transitions.
      const s = stateRef.current;
      s.intensity += (s.target.intensity - s.intensity) * 0.04;
      s.rings += (s.target.rings - s.rings) * 0.04;
      s.hue += (s.target.hue - s.hue) * 0.04;

      // Cursor influence: gentle attraction of the core toward the cursor.
      let ox = 0, oy = 0;
      if (mouse.current.active) {
        const dx = mouse.current.x - cx;
        const dy = mouse.current.y - cy;
        const d = Math.hypot(dx, dy) || 1;
        const pull = Math.min(80, 5000 / d);
        ox = (dx / d) * pull * 0.35;
        oy = (dy / d) * pull * 0.35;
      }

      ctx.clearRect(0, 0, w, h);

      const x = cx + ox;
      const y = cy + oy;
      const baseR = Math.min(w, h) * 0.18;

      // Outer halo
      const halo = ctx.createRadialGradient(x, y, 0, x, y, baseR * 3.2);
      halo.addColorStop(0, `hsla(${s.hue}, 100%, 60%, ${0.18 * s.intensity})`);
      halo.addColorStop(0.45, `hsla(${s.hue}, 100%, 55%, ${0.06 * s.intensity})`);
      halo.addColorStop(1, "hsla(0, 0%, 0%, 0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);

      // Rotating dashed rings
      const rings = Math.round(s.rings);
      for (let i = 0; i < rings; i++) {
        const r = baseR * (1 + i * 0.35);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(t * (i % 2 === 0 ? 1 : -1) * (0.3 + i * 0.05));
        ctx.strokeStyle = `hsla(${s.hue}, 90%, 65%, ${0.08 + i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 10]);
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      ctx.setLineDash([]);

      // Concentric breathing arcs
      for (let i = 0; i < 4; i++) {
        const pulse = (Math.sin(t * 1.4 + i) + 1) * 0.5;
        const r = baseR * (0.45 + i * 0.18) + pulse * 6;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${s.hue + i * 4}, 95%, 65%, ${0.05 + pulse * 0.06})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Core solid
      const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, baseR * 0.6);
      coreGrad.addColorStop(0, `hsla(${s.hue}, 100%, 75%, ${0.9 * s.intensity})`);
      coreGrad.addColorStop(0.5, `hsla(${s.hue}, 100%, 55%, ${0.25 * s.intensity})`);
      coreGrad.addColorStop(1, "hsla(0,0%,0%,0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(x, y, baseR * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Orbiting nodes
      const nodeCount = 6 + Math.round(s.rings);
      for (let i = 0; i < nodeCount; i++) {
        const a = (i / nodeCount) * Math.PI * 2 + t * 0.6 * (i % 2 === 0 ? 1 : -1);
        const r = baseR * (1.25 + (i % 3) * 0.25);
        const nx = x + Math.cos(a) * r;
        const ny = y + Math.sin(a) * r;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 100%, 70%, 0.9)`;
        ctx.shadowColor = `hsla(${s.hue}, 100%, 60%, 0.9)`;
        ctx.shadowBlur = 10;
        ctx.arc(nx, ny, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
