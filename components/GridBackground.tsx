"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GridBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Geometric Mesh Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="absolute rounded-full pointer-events-none transition-opacity duration-300 opacity-40"
        style={{
          width: "500px",
          height: "500px",
          top: `${mousePos.y - 250}px`,
          left: `${mousePos.x - 250}px`,
          background: "radial-gradient(circle, rgba(255, 85, 0, 0.25) 0%, rgba(255, 85, 0, 0) 70%)",
        }}
      />
    </div>
  );
}
