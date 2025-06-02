"use client";

import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-[#001219] via-[#0a9396] to-[#6a0572] bg-[length:400%_400%]">
      {/* from-[#0f172a] via-[#1e3a8a] to-[#6d28d9] */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}