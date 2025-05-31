"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "@/app/components/Avatar";
import Fireflies from "./Fireflies"; // Adjust path if needed

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row h-screen text-white px-6 md:px-16 ">
      {/* left avatar area */}
      <Fireflies />
      <div className="flex-1 hidden md:block">
        <Canvas camera={{ position: [0, 1.6, 4], fov: 45 }}>
          <ambientLight intensity={1.8} />
          <directionalLight position={[0, 5, 5]} intensity={1.2} />
          <OrbitControls
            enableZoom={true}
            minDistance={2}
            maxDistance={6}
            target={[0, 1, 0]}
          />
          <Avatar position={[0, -0.5, 0]} scale={[1.6, 1.6, 1.6]} />
        </Canvas>
      </div>
      {/* right text area */}
      <div className="flex-1 flex flex-col justify-center z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold font-serif mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey, I’m Syeda Hajra
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#d1d1e9] max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I’m a full-stack developer who loves building things that feel good to
          use and look even better. From experiments to real-world apps, I enjoy bringing ideas to life with clean, creative design.
        </motion.p>

        <motion.p
          className="mt-6 text-sm text-[#a0a0c2]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Currently into React, a bit of backend, and sometimes... ethical
          hacking. <br />Scroll down to see what I’ve been up to.
        </motion.p>
      </div>
    </section>
  );
}
