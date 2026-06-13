import { createFileRoute } from "@tanstack/react-router";
import ParticleField from "@/components/nexora/ParticleField";
import Navbar from "@/components/nexora/Navbar";
import Hero from "@/components/nexora/Hero";
import About from "@/components/nexora/About";
import Capabilities from "@/components/nexora/Capabilities";
import Projects from "@/components/nexora/Projects";
import Technology from "@/components/nexora/Technology";
import WhyNexora from "@/components/nexora/WhyNexora";
import Process from "@/components/nexora/Process";
import Contact from "@/components/nexora/Contact";
import Footer from "@/components/nexora/Footer";
import AIChatbot from "@/components/nexora/AIChatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Labs — Building Intelligence For The Future" },
      { name: "description", content: "Nexora Labs is an AI engineering studio building intelligent applications, AI agents, automation systems, and scalable software products." },
      { property: "og:title", content: "Nexora Labs — Building Intelligence For The Future" },
      { property: "og:description", content: "AI engineering studio building intelligent applications, agents, and scalable software products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen overflow-hidden bg-[#020617] text-foreground">
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Technology />
        <WhyNexora />
        <Process />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
