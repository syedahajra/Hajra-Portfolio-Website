"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "@/app/components/Avatar";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#1e1e2f" }}>
      {/* Left: 3D Avatar */}
      <div style={{ flex: 1 }}>
        <Canvas camera={{ position: [0, 1.6, 4], fov: 45 }}>
          <ambientLight intensity={1.8} />
          <directionalLight position={[0, 5, 5]} intensity={1.2} />
          <OrbitControls enableZoom={true} minDistance={2} maxDistance={6} target={[0, 1, 0]} />
          <Avatar position={[0, -0.4, 0]} scale={[1.5, 1.5, 1.5]} />
        </Canvas>
      </div>

      {/* Right: Text Content */}
      <div style={{ flex: 1, padding: "3rem", color: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontFamily: "Georgia, serif" }}>
          Hi, I'm [Your Name]
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
          A passionate developer blending technology and creativity.<br />
          I work with 3D, full-stack apps, and beautiful interfaces.
        </p>
      </div>
    </div>
  );
}
