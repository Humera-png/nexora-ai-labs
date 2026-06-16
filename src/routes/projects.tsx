import { createFileRoute } from "@tanstack/react-router";
import Projects from "@/components/nexora/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nexora Labs" },
      { name: "description", content: "Case studies of AI systems and software products engineered and shipped by Nexora Labs." },
      { property: "og:title", content: "Projects — Nexora Labs" },
      { property: "og:description", content: "Engineered, shipped, in production." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Projects />
    </div>
  ),
});
