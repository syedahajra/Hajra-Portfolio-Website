"use client";

import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <div className="flex h-screen w-full animate-gradient bg-gradient-to-br from-[#001219] via-[#0a9396] to-[#6a0572] bg-[length:400%_400%]">
      <HeroSection/>
    </div>
  );
}
