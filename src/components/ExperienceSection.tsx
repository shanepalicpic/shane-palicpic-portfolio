"use client";

import { motion, useScroll, useTransform } from "motion/react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Briefcase,
  Award,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { useRef } from "react";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const experiences = [
    {
      title: "Software Developer",
      company: "SM Supermalls",
      companyLink: "https://www.smsupermalls.com",
      location: "Pasay City, PH (Hybrid)",
      period: "2023 - Present",
      technologies: [
        { name: "OutSystems", color: "blue" },
        { name: "JavaScript", color: "orange" },
        { name: "CSS", color: "purple" },
        { name: "AWS S3", color: "teal" },
        { name: "Figma", color: "indigo" },
      ],
      achievements: [
        "Delivered web and mobile applications in a collaborative Agile Scrum environment.",
        "Ensured system reliability and performance by resolving critical issues efficiently.",
        "Improved operational efficiency through automated data migration and process optimizations.",
      ],
      gradient: "from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/30",
      dotColor: "bg-blue-500",
    },
    {
      title: "Associate Web Developer",
      company: "XPERTO",
      companyLink: "https://www.xperto.ph/",
      location: "Remote",
      period: "2021 - 2022",
      technologies: [
        { name: "Vue.js", color: "blue" },
        { name: "Javascript ES6", color: "teal" },
        { name: "DynamoDB", color: "indigo" },
        { name: "Bubble.io", color: "pink" },
        { name: "Figma", color: "purple" },
      ],
      achievements: [
        "Developed interactive web features for live events using JavaScript frameworks and cloud services.",
        "Created responsive web applications for event data tracking and user engagement.",
        "Streamlined event data management and participation tracking for better operational efficiency.",
      ],
      gradient: "from-purple-500/10 to-teal-500/10",
      borderColor: "border-purple-500/30",
      dotColor: "bg-purple-500",
    },
    {
      title: "Operations Intern",
      company: "MyCode",
      companyLink: "https://www.mycode.ph/",
      location: "Remote",
      period: "2022 - 2022",
      technologies: [
        { name: "Google Workspace", color: "orange" },
        { name: "Google Sheets", color: "teal" },
      ],
      achievements: [
        "Ensured all data was synced and up to date, reducing errors and manual work.",
        "Improved operational efficiency through organized and streamlined schedule management.",
        "Managed and maintained company Google Sheets, including student, class, and teacher schedules.",
      ],
      gradient: "from-teal-500/10 to-orange-500/10",
      borderColor: "border-teal-500/30",
      dotColor: "bg-teal-500",
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
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text-multi glass-text rounded-2xl px-6 py-3 inline-block mb-4">
            My Journey 🌟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's a little story about my professional adventures and the
            amazing teams I've worked with
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-teal-400/20 rounded-full"></div>

          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-0.5 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 origin-top z-10 rounded-full"
            style={{
              height: lineHeight,
              opacity: lineOpacity,
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-center"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        className={`w-6 h-6 ${exp.dotColor} rounded-full border-4 border-background shadow-lg`}
                        whileHover={{ scale: 1.4 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0px rgba(236,72,153,0.4)",
                            "0 0 0 10px rgba(236,72,153,0)",
                            "0 0 0 0px rgba(236,72,153,0)",
                          ],
                        }}
                        transition={{
                          boxShadow: { duration: 2, repeat: Infinity },
                          scale: { duration: 0.2 },
                        }}
                      />

                      {/* Floating Icon */}
                      <motion.div
                        className={`hidden md:block absolute -top-10 left-1/2 transform -translate-x-1/2 glass rounded-full p-2 ${exp.borderColor} border-2`}
                        animate={{
                          y: [0, -3, 0],
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Briefcase className="w-4 h-4 text-foreground" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Experience Card */}
                  <div className={`w-full ${isLeft ? "pr-8" : "pl-8"}`}>
                    <div
                      className={`${
                        isLeft ? "mr-auto ml-0" : "ml-auto mr-0"
                      } max-w-md`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card
                          className={`glass p-6 relative overflow-hidden border-2 ${exp.borderColor} hover:shadow-xl transition-all duration-300 group`}
                        >
                          {/* Animated Background Gradient */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                          />

                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <motion.h3
                                  className="text-xl md:text-2xl font-bold text-foreground mb-1"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  {exp.title}
                                </motion.h3>

                                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                  <a
                                    href={exp.companyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:underline cursor-pointer"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                    <span className="font-medium">
                                      {exp.company}
                                    </span>
                                  </a>
                                </div>

                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{exp.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span className="text-m">{exp.period}</span>
                                  </div>
                                </div>
                              </div>

                              <motion.div
                                className={`glass px-3 py-1 rounded-full text-sm font-medium ${exp.borderColor} border ml-4`}
                                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                  rotate: 0,
                                }}
                                transition={{
                                  delay: 0.7 + index * 0.2,
                                  type: "spring",
                                }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                {exp.period.split(" - ")[1]}
                              </motion.div>
                            </div>

                            {/* Technologies */}
                            <div className="mb-4">
                              <h4 className="font-medium text-foreground mb-2 text-sm">
                                Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, techIndex) => (
                                  <motion.span
                                    key={techIndex}
                                    className={`px-2 py-1 rounded-full text-xs ${getTagClass(
                                      tech.color
                                    )} hover:scale-110 hover:-translate-y-1`}
                                    initial={{ opacity: 0, scale: 0, y: 10 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                      delay: 0.5 + techIndex * 0.1,
                                      type: "spring",
                                    }}
                                  >
                                    {tech.name}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            {/* Key Achievement */}
                            <motion.div
                              className={`glass p-3 rounded-lg ${exp.borderColor} border`}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                            >
                              <div className="flex items-start gap-2">
                                <motion.div
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.5,
                                  }}
                                >
                                  <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                </motion.div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {exp.achievements[0]}
                                </p>
                              </div>
                            </motion.div>

                            {/* Additional Achievements on Hover */}
                            <motion.div
                              className="mt-3 space-y-2 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 1 + index * 0.1 }}
                            >
                              {exp.achievements
                                .slice(1)
                                .map((achievement, achIndex) => (
                                  <motion.div
                                    key={achIndex}
                                    className="flex items-start gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                      transitionDelay: `${achIndex * 100}ms`,
                                    }}
                                  >
                                    <Zap className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground leading-relaxed">
                                      {achievement}
                                    </span>
                                  </motion.div>
                                ))}
                            </motion.div>
                          </div>

                          {/* Connection Line to Timeline */}
                          <motion.div
                            className={`absolute top-8 ${
                              isLeft
                                ? "right-0 translate-x-full"
                                : "left-0 -translate-x-full"
                            } w-8 h-0.5 bg-gradient-to-${isLeft ? "r" : "l"} ${
                              isLeft
                                ? "from-border to-transparent"
                                : "from-transparent to-border"
                            }`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{
                              delay: 0.6 + index * 0.2,
                              duration: 0.5,
                            }}
                          />
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
