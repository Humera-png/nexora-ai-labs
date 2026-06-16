import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/components/nexora/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexora Labs" },
      { name: "description", content: "Tell us about your project. We usually respond within one business day." },
      { property: "og:title", content: "Contact — Nexora Labs" },
      { property: "og:description", content: "Let's build something extraordinary." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Contact />
    </div>
  ),
});
