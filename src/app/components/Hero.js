"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import Avatar from "@/app/components/Avatar";
import Fireflies from "./Fireflies";
import { useRef, useState } from "react";
import { Box } from "lucide-react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  const textRef = useRef(null);
  const triggerWave = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 2000);
  };

  const handleHeyHover = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 2000);
  };
  return (
    <section className="relative flex flex-col md:flex-row h-screen text-white px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Fireflies />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#1e3a8a]/50 to-[#6d28d9]/60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
      </div>

      {/* Left avatar area */}
      <div
        className="flex-1 hidden md:block relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Canvas camera={{ position: [0, 1.6, 4], fov: 45 }}>
          <ambientLight intensity={2.2} />
          <directionalLight
            position={[0, 5, 5]}
            intensity={1.4}
            color="#f0abfc"
          />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            minDistance={2}
            maxDistance={6}
            target={[0, 1, 0]}
            autoRotate
            autoRotateSpeed={isHovered ? 0.2 : 0.5}
          />
          <ContactShadows
            opacity={0.8}
            blur={2}
            position={[0, -0.5, 0]}
            color="#5b21b6"
          />
          <Avatar
            position={[0, -0.5, 0]}
            scale={[1.6, 1.6, 1.6]}
            isHovered={isHovered}
            wave={isWaving}
            onClick={triggerWave}
          />
        </Canvas>
        <motion.div
          className="absolute bottom-1 left-1/2 -translate-x-1/2 text-white/70 text-xs flex items-center gap-2"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Box size={16} className="text-white/70" />
          <span className="text-sm font-mono">Drag to rotate</span>
        </motion.div>
      </div>

      {/* Right text area */}
      <div className="flex-1 flex flex-col justify-center z-10 relative">
        <div ref={textRef} className="max-w-xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span onMouseEnter={handleHeyHover}>Hey</span>, I'm Syeda Hajra
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a{" "}
            <span className="text-purple-300 font-medium">
              Fullstack developer
            </span>{" "}
            who loves turning ideas into things people actually enjoy using. 
            <span className="ml-1 text-[#d1d1e9]">
               Into UIs that feel nice and work even better. Recently trying out
              3D with Three.js — it's chaotic, but fun.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              whileHover={{
                y: -2,
                boxShadow: "0 4px 20px rgba(167, 139, 250, 0.3)",
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              className="px-6 py-3 border border-purple-400/30 rounded-lg font-medium hover:bg-purple-900/30 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="absolute -left-10 bottom-20 hidden md:block"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-2xl">👇</span>
          </motion.div>
        </div>

        <motion.p
          className="mt-12 text-sm text-[#a0a0c2] flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="inline-block w-4 h-4 rounded-full bg-green-400 animate-pulse"></span>
          Currently building with Next.js, JavaScript, and Three.js
        </motion.p>
      </div>
    </section>
  );
}
