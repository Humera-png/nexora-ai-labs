import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/nexora/Hero";
import About from "@/components/nexora/About";
import WhyNexora from "@/components/nexora/WhyNexora";
import Process from "@/components/nexora/Process";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Labs — Building Intelligence For The Future" },
      { name: "description", content: "An applied AI engineering studio building intelligent applications, agents, and scalable software products." },
      { property: "og:title", content: "Nexora Labs — Building Intelligence For The Future" },
      { property: "og:description", content: "Applied AI engineering studio." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyNexora />
      <Process />
    </>
  );
}
