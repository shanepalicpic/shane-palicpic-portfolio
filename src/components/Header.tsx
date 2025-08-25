"use client";

import { motion } from "motion/react";
import { Moon, Sun, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const navItems = [
    { id: "about", label: "✨ About" },
    { id: "experience", label: "💼 Experience" },
    { id: "projects", label: "🚀 Projects" },
    { id: "contact", label: "💬 Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <nav className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between border-2 border-primary/10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg font-bold text-primary cursor-pointer"
        >
          Shane 💖
        </motion.div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full transition-all font-medium ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "hover:bg-accent hover:text-accent-foreground hover:scale-105"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="glass border-primary/30 hover:border-primary/50 font-medium"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1iFSjp3JO0lVRX8lPVyHs-1pbmQeMfA9u/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </motion.div>

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent transition-colors glass border border-primary/20"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-primary" />
            ) : (
              <Moon className="w-5 h-5 text-primary" />
            )}
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
