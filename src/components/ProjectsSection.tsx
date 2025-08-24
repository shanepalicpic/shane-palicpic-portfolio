"use client";

import { motion } from "motion/react";
// import {ExternalLink, Github, Star, ArrowUpRight, ChevronDown } from "lucide-react";
import { Wrench, Hammer, Code2, Sparkles, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Chat Assistant",
      description:
        "A sophisticated chatbot built with advanced NLP capabilities that can understand context and provide intelligent responses across multiple domains.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "React", color: "blue" },
        { name: "Python", color: "orange" },
        { name: "OpenAI API", color: "teal" },
        { name: "FastAPI", color: "purple" },
        { name: "PostgreSQL", color: "indigo" },
      ],
      github: "https://github.com/shane/ai-chat-assistant",
      demo: "https://ai-chat-demo.shane.dev",
      featured: true,
      stats: { stars: 1234, forks: 89, issues: 12 },
    },
    {
      title: "Real-time Collaboration Platform",
      description:
        "A modern workspace application with real-time collaboration features, video calls, and project management tools.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "Next.js", color: "blue" },
        { name: "WebRTC", color: "teal" },
        { name: "Socket.io", color: "purple" },
        { name: "MongoDB", color: "orange" },
        { name: "Tailwind", color: "indigo" },
      ],
      github: "https://github.com/shane/collab-platform",
      demo: "https://collab.shane.dev",
      featured: true,
      stats: { stars: 876, forks: 45, issues: 8 },
    },
    {
      title: "Smart Home IoT Dashboard",
      description:
        "An intuitive dashboard for managing IoT devices with real-time monitoring, automation rules, and energy analytics.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "Vue.js", color: "teal" },
        { name: "Node.js", color: "orange" },
        { name: "MQTT", color: "purple" },
        { name: "InfluxDB", color: "blue" },
        { name: "Docker", color: "indigo" },
      ],
      github: "https://github.com/shane/iot-dashboard",
      demo: "https://iot-demo.shane.dev",
      featured: false,
      stats: { stars: 542, forks: 67, issues: 5 },
    },
    {
      title: "E-commerce Analytics Engine",
      description:
        "Advanced analytics platform for e-commerce businesses with predictive insights and automated reporting.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "Python", color: "orange" },
        { name: "Apache Spark", color: "purple" },
        { name: "React", color: "blue" },
        { name: "PostgreSQL", color: "indigo" },
        { name: "Kubernetes", color: "teal" },
      ],
      github: "https://github.com/shane/ecommerce-analytics",
      demo: "https://analytics.shane.dev",
      featured: false,
      stats: { stars: 321, forks: 23, issues: 3 },
    },
    {
      title: "Machine Learning Model Registry",
      description:
        "A centralized platform for managing, versioning, and deploying machine learning models with automated CI/CD pipelines.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "Python", color: "orange" },
        { name: "MLflow", color: "blue" },
        { name: "Kubernetes", color: "teal" },
        { name: "FastAPI", color: "purple" },
        { name: "Redis", color: "pink" },
      ],
      github: "https://github.com/shane/ml-registry",
      demo: "https://ml-registry.shane.dev",
      featured: false,
      stats: { stars: 456, forks: 34, issues: 7 },
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting platform built on blockchain technology with end-to-end encryption and audit trails.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "Solidity", color: "indigo" },
        { name: "Web3.js", color: "blue" },
        { name: "React", color: "blue" },
        { name: "IPFS", color: "teal" },
        { name: "Ethereum", color: "purple" },
      ],
      github: "https://github.com/shane/blockchain-voting",
      demo: "https://vote.shane.dev",
      featured: false,
      stats: { stars: 789, forks: 56, issues: 4 },
    },
    {
      title: "AI Code Review Assistant",
      description:
        "An intelligent code review tool that uses machine learning to detect bugs, suggest improvements, and enforce coding standards.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "TypeScript", color: "blue" },
        { name: "OpenAI API", color: "teal" },
        { name: "GitHub API", color: "purple" },
        { name: "Node.js", color: "orange" },
        { name: "Express", color: "indigo" },
      ],
      github: "https://github.com/shane/ai-code-reviewer",
      demo: "https://code-review.shane.dev",
      featured: false,
      stats: { stars: 623, forks: 89, issues: 6 },
    },
    {
      title: "Quantum Computing Simulator",
      description:
        "A web-based quantum computing simulator with visual circuit builder and real-time quantum state visualization.",
      image: "/api/placeholder/400/250",
      technologies: [
        { name: "Python", color: "orange" },
        { name: "Qiskit", color: "purple" },
        { name: "React", color: "blue" },
        { name: "Three.js", color: "teal" },
        { name: "WebGL", color: "indigo" },
      ],
      github: "https://github.com/shane/quantum-simulator",
      demo: "https://quantum.shane.dev",
      featured: false,
      stats: { stars: 445, forks: 67, issues: 9 },
    },
  ];

  const getTagClass = (color: string) => {
    switch (color) {
      case "blue":
        return "tag-blue";
      case "purple":
        return "tag-purple";
      case "teal":
        return "tag-teal";
      case "orange":
        return "tag-orange";
      case "indigo":
        return "tag-indigo";
      case "pink":
        return "tag-pink";
      default:
        return "tag-blue";
    }
  };

  return (
    // <section id="projects" className="min-h-screen py-20 px-4">
    //   <div className="max-w-7xl mx-auto">
    //     <motion.div
    //       initial={{ opacity: 0, y: 50 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.8 }}
    //       className="text-center mb-16"
    //     >
    //       <h2 className="text-4xl lg:text-5xl font-bold gradient-text-multi glass-text rounded-2xl px-6 py-3 inline-block mb-4">
    //         My Creations 🚀
    //       </h2>
    //       <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
    //         Here are some projects I've poured my heart into. Each one tells a
    //         story of learning, creativity, and problem-solving.
    //       </p>
    //     </motion.div>

    //     {/* 2-Column Grid Layout */}
    //     <div className="grid md:grid-cols-2 gap-8">
    //       {projects.map((project, index) => (
    //         <motion.div
    //           key={index}
    //           initial={{ opacity: 0, y: 50 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true, margin: "-50px" }}
    //           transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
    //         >
    //           <Card className="glass overflow-hidden hover:scale-[1.03] transition-all duration-300 group h-full flex flex-col border-2 border-primary/10 hover:border-primary/20">
    //             {/* Project Image */}
    //             <motion.div
    //               className="relative overflow-hidden"
    //               whileHover={{ scale: 1.02 }}
    //             >
    //               <img
    //                 src={project.image}
    //                 alt={project.title}
    //                 className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
    //               />

    //               {project.featured && (
    //                 <motion.div
    //                   className="absolute top-4 left-4 glass text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 border border-primary/30"
    //                   initial={{ scale: 0, rotate: -10 }}
    //                   whileInView={{ scale: 1, rotate: 0 }}
    //                   transition={{ delay: 0.5, type: "spring" }}
    //                   whileHover={{ scale: 1.1, rotate: 5 }}
    //                 >
    //                   ⭐ Featured
    //                 </motion.div>
    //               )}

    //               {/* Overlay with Links */}
    //               <motion.div
    //                 className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
    //                 initial={false}
    //               >
    //                 <Button
    //                   size="sm"
    //                   variant="secondary"
    //                   asChild
    //                   className="glass"
    //                 >
    //                   <a
    //                     href={project.github}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     <Github className="w-4 h-4 mr-2" />
    //                     Code
    //                   </a>
    //                 </Button>
    //                 <Button size="sm" asChild>
    //                   <a
    //                     href={project.demo}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     <ArrowUpRight className="w-4 h-4 mr-2" />
    //                     Demo
    //                   </a>
    //                 </Button>
    //               </motion.div>
    //             </motion.div>

    //             {/* Project Info */}
    //             <div className="p-6 space-y-4 flex-1 flex flex-col">
    //               <motion.div
    //                 className="space-y-2"
    //                 whileHover={{ scale: 1.01 }}
    //               >
    //                 <h3 className="text-lg font-bold text-foreground">
    //                   {project.title}
    //                 </h3>
    //                 <p className="text-muted-foreground text-sm leading-relaxed">
    //                   {project.description}
    //                 </p>
    //               </motion.div>

    //               {/* GitHub Stats */}
    //               <motion.div
    //                 className="flex items-center gap-4 text-xs text-muted-foreground"
    //                 initial={{ opacity: 0 }}
    //                 whileInView={{ opacity: 1 }}
    //                 transition={{ delay: 0.3 }}
    //               >
    //                 <div className="flex items-center gap-1">
    //                   <Star className="w-3 h-3 text-yellow-500" />
    //                   <span>{project.stats.stars}</span>
    //                 </div>
    //                 <div className="flex items-center gap-1">
    //                   <Github className="w-3 h-3" />
    //                   <span>{project.stats.forks}</span>
    //                 </div>
    //                 <div className="text-green-500">
    //                   {project.stats.issues} issues
    //                 </div>
    //               </motion.div>

    //               {/* Technologies */}
    //               <div className="space-y-2 flex-1">
    //                 <h4 className="text-sm font-medium text-foreground">
    //                   Built with:
    //                 </h4>
    //                 <div className="flex flex-wrap gap-1">
    //                   {project.technologies
    //                     .slice(0, 4)
    //                     .map((tech, techIndex) => (
    //                       <motion.span
    //                         key={techIndex}
    //                         className={`px-2 py-1 rounded-lg text-xs ${getTagClass(
    //                           tech.color
    //                         )} hover:scale-105 hover:-translate-y-1`}
    //                         initial={{ opacity: 0, scale: 0 }}
    //                         whileInView={{ opacity: 1, scale: 1 }}
    //                         transition={{
    //                           delay: 0.5 + techIndex * 0.1,
    //                           type: "spring",
    //                         }}
    //                       >
    //                         {tech.name}
    //                       </motion.span>
    //                     ))}
    //                   {project.technologies.length > 4 && (
    //                     <span className="px-2 py-1 bg-muted text-muted-foreground rounded-lg text-xs">
    //                       +{project.technologies.length - 4}
    //                     </span>
    //                   )}
    //                 </div>
    //               </div>

    //               {/* Action Buttons */}
    //               <div className="flex gap-2 pt-2 mt-auto">
    //                 <Button
    //                   variant="outline"
    //                   size="sm"
    //                   asChild
    //                   className="glass flex-1 border-primary/20"
    //                 >
    //                   <a
    //                     href={project.github}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     <Github className="w-3 h-3 mr-1" />
    //                     Source
    //                   </a>
    //                 </Button>
    //                 <Button size="sm" asChild className="flex-1">
    //                   <a
    //                     href={project.demo}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                   >
    //                     <ExternalLink className="w-3 h-3 mr-1" />
    //                     Demo
    //                   </a>
    //                 </Button>
    //               </div>
    //             </div>
    //           </Card>
    //         </motion.div>
    //       ))}
    //     </div>

    //     {/* View More Projects */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ delay: 0.5 }}
    //       className="text-center mt-12"
    //     >
    //       <Button
    //         variant="outline"
    //         size="lg"
    //         className="glass group border-2 border-primary/20 hover:border-primary/40"
    //         asChild
    //       >
    //         <a
    //           href="https://github.com/shanepalicpic"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
    //           <span className="gradient-text-primary">View All Projects</span>
    //           <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    //         </a>
    //       </Button>
    //     </motion.div>
    //   </div>
    // </section>
    <section
      id="projects"
      className="min-h-screen py-20 px-4 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section Title */}
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text-multi glass-text rounded-2xl px-6 py-3 inline-block mb-6">
            My Creations 🚀
          </h2>

          {/* Under Construction Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-3xl border-2 border-primary/10 max-w-2xl mx-auto relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Animated Tools */}
              <div className="flex justify-center items-center gap-6 mb-6">
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Wrench className="w-12 h-12 text-blue-500" />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [0, -20, 20, 0],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <Hammer className="w-12 h-12 text-purple-500" />
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                >
                  <Code2 className="w-12 h-12 text-teal-500" />
                </motion.div>
              </div>

              {/* Main Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-3xl font-bold gradient-text-primary">
                  Under Construction
                </h3>

                <motion.p
                  className="text-xl text-muted-foreground leading-relaxed max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  I'm currently crafting some amazing projects to showcase here.
                  Each one will tell a story of creativity and innovation! ✨
                </motion.p>

                {/* Animated Status */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="flex items-center justify-center gap-3 mt-8 glass px-6 py-3 rounded-full border border-primary/20 inline-flex mx-auto"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Clock className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-foreground font-medium">
                    Coming Soon
                  </span>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-muted-foreground mt-4 max-w-md mx-auto"
          >
            In the meantime, feel free to check out my experience and get in
            touch! I'd love to hear about your next project 💖
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
