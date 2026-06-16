import { createFileRoute } from "@tanstack/react-router";
import Technology from "@/components/nexora/Technology";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Nexora Labs" },
      { name: "description", content: "The technology constellation behind every Nexora Labs system — frontend, backend, AI, and cloud." },
      { property: "og:title", content: "Technology — Nexora Labs" },
      { property: "og:description", content: "The stack behind every system." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Technology />
    </div>
  ),
});
