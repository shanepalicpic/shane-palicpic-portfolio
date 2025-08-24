"use client";

import { motion, type Variants } from "framer-motion";
import { Code, Brain, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export function AboutSection() {
  const lines = ["Hey there!", "I'm Shane Angela Palicpic"];
  const [typedLines, setTypedLines] = useState<string[]>(["", ""]);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          setTypedLines((prev) => {
            const newLines = [...prev];
            newLines[lineIndex] = lines[lineIndex].slice(0, charIndex + 1);
            return newLines;
          });
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
        }
      } else {
        setTypingDone(true);
        clearInterval(timer);
      }
    };

    const timer = setInterval(type, 80);
    return () => clearInterval(timer);
  }, []);

  /** Master stagger container */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  /** Each item fade/slide in */
  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  /** Floating image effect */
  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center px-4"
      >
        {/* LEFT CONTENT */}
        <div className="space-y-6 order-2 lg:order-1 lg:col-span-3">
          {/* Animated Heading */}
          <motion.div>
            {typedLines.map((line, i) => (
              <motion.h1
                key={i}
                className={`text-4xl lg:text-6xl font-bold min-h-[1.2em] rounded-2xl py-2 inline-block ${
                  i === 0 ? "gradient-text-primary" : "gradient-text-multi"
                }`}
              >
                {line}
                {i === typedLines.length - 1 && !typingDone && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1 gradient-text-primary"
                  >
                    |
                  </motion.span>
                )}
              </motion.h1>
            ))}
          </motion.div>

          {/* ✅ Show the rest ONLY after typing */}
          {typingDone && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Role Tagline */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-xl text-muted-foreground"
              >
                <Heart className="w-5 h-5 text-primary animate-pulse" />
                <span className="gradient-text-multi">
                  Software Developer | AI Engineer
                </span>
              </motion.div>

              {/* Intro Paragraph */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                🌟 Welcome to my little corner of the internet! I'm a passionate
                developer with 3 years of full-stack experience, building
                high-quality web and mobile applications. Skilled in OutSystems,
                Bubble.io, Python, JavaScript, React, and Vue, I thrive in Agile
                teams and deliver complex features with excellence. A cumlaude
                Computer Science graduate from University of the Philippines Los
                Baños, I'm deeply interested in AI and dedicated to creating
                impactful, user-focused solutions.
              </motion.p>

              {/* Cards Section */}
              <motion.div variants={containerVariants} className="space-y-4">
                <motion.h3
                  variants={itemVariants}
                  className="text-xl font-semibold gradient-text-primary"
                >
                  What I love doing:
                </motion.h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🚀",
                      title: "Full-Stack Development",
                      desc: "Building end-to-end solutions",
                      color: "blue",
                    },
                    {
                      icon: "🤖",
                      title: "AI & Machine Learning",
                      desc: "Creating intelligent & automated systems",
                      color: "purple",
                    },
                    {
                      icon: "✨",
                      title: "Low Code Development",
                      desc: "Rapid prototyping & solutions",
                      color: "teal",
                    },
                    {
                      icon: "📚",
                      title: "Continuous Learning",
                      desc: "Always exploring new tech",
                      color: "orange",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`glass rounded-xl p-4 border-2 cursor-pointer ${
                        item.color === "blue"
                          ? "border-blue-500/20 hover:border-blue-500/40"
                          : item.color === "purple"
                          ? "border-purple-500/20 hover:border-purple-500/40"
                          : item.color === "teal"
                          ? "border-teal-500/20 hover:border-teal-500/40"
                          : "border-orange-500/20 hover:border-orange-500/40"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end order-1 lg:order-2 lg:col-span-2 mt-16 lg:pt-0"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            <div className="glass-strong rounded-3xl p-8 transform rotate-3 border-2 border-primary/20">
              <img
                src="/img/profile.jpg"
                alt="Shane - Software Engineer & AI Engineer"
                className="w-72 h-96 object-cover rounded-2xl"
                draggable={false}
              />
            </div>

            {/* Floating Icons */}
            <motion.div
              className="absolute -top-4 -right-4 glass rounded-full p-3 border-2 border-blue-500/30"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              <Code className="w-6 h-6 text-blue-500" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 glass rounded-full p-3 border-2 border-purple-500/30"
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity },
              }}
            >
              <Brain className="w-6 h-6 text-purple-500" />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 blur-2xl -z-10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
