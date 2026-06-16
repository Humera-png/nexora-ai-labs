import { createFileRoute } from "@tanstack/react-router";
import Capabilities from "@/components/nexora/Capabilities";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Nexora Labs" },
      { name: "description", content: "Modules of an intelligent stack: AI agents, LLM applications, automation infrastructure, and full-stack engineering." },
      { property: "og:title", content: "Solutions — Nexora Labs" },
      { property: "og:description", content: "Composable AI systems engineered for production." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Capabilities />
    </div>
  ),
});
