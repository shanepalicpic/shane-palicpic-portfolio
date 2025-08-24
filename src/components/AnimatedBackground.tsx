"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 20, y: 20 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22 });

  useEffect(() => {
    let frame: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
        mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
        mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mouseX, mouseY]);

  const geometricShapes = [
    {
      type: "triangle",
      size: 60,
      left: 20,
      top: 10,
      gradient:
        "linear-gradient(135deg, rgba(236,72,153,0.25) 0%, rgba(147,51,234,0.15) 100%)",
    },
    {
      type: "square",
      size: 40,
      left: 35,
      top: 30,
      gradient:
        "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(219,39,119,0.12) 100%)",
    },
    {
      type: "circle",
      size: 80,
      left: 50,
      top: 50,
      gradient:
        "linear-gradient(135deg, rgba(147,51,234,0.15) 0%, rgba(236,72,153,0.2) 100%)",
    },
    {
      type: "diamond",
      size: 50,
      left: 65,
      top: 20,
      gradient:
        "linear-gradient(135deg, rgba(219,39,119,0.25) 0%, rgba(236,72,153,0.15) 100%)",
    },
    {
      type: "hexagon",
      size: 70,
      left: 80,
      top: 70,
      gradient:
        "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(147,51,234,0.12) 100%)",
    },
  ];

  const getClipPath = (type: string) => {
    switch (type) {
      case "triangle":
        return "polygon(50% 0%, 0% 100%, 100% 100%)";
      case "diamond":
        return "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
      case "hexagon":
        return "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)";
      case "circle":
        return "none";
      case "square":
        return "none";
      default:
        return "none";
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236,72,153,0.12) 0%, transparent 35%),
                      linear-gradient(135deg, rgba(236,72,153,0.04) 0%, rgba(219,39,119,0.08) 50%, transparent 100%)`,
        }}
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {geometricShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-50"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            background: shape.gradient,
            clipPath: getClipPath(shape.type),
            borderRadius:
              shape.type === "circle"
                ? "50%"
                : shape.type === "square"
                ? "12px"
                : "0",
          }}
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -30, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.7,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(236,72,153,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236,72,153,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px", "0px 0px"],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
