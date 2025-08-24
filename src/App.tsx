"use client";

import { AnimatedBackground } from "./components/AnimatedBackground";
import { Header } from "./components/Header";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Analytics />
    </div>
  );
}
