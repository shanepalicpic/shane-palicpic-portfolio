"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Github, Linkedin, Heart, Phone } from "lucide-react";
import { Card } from "./ui/card";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shanepalicpic@gmail.com",
      href: "mailto:shanepalicpic@gmail.com",
      color: "blue",
      iconColor: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Message",
      value: "Viber",
      href: "viber://chat?number=%2B9167677293",
      color: "orange",
      iconColor: "text-orange-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pasay City, PH",
      href: "#",
      color: "teal",
      iconColor: "text-teal-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@shanepalicpic",
      href: "https://github.com/shanepalicpic",
      color: "purple",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "@shane-angela-palicpic",
      href: "https://linkedin.com/in/shane-angela-palicpic",
      color: "blue",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text-multi glass-text rounded-2xl px-6 py-3 inline-block mb-4">
            Let's Chat! 💬
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential
            collaborators, or anyone who wants to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass p-8 border-2 border-blue-500/10 hover:border-blue-500/20 transition-colors">
              <h3 className="text-2xl font-bold gradient-text-primary">
                Get in touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group border-2 ${
                      item.color === "blue"
                        ? "border-blue-500/10 hover:border-blue-500/30"
                        : "border-teal-500/10 hover:border-teal-500/30"
                    }`}
                    whileHover={{ scale: 1.02, x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full glass flex items-center justify-center ${
                        item.iconColor
                      } border-2 ${
                        item.color === "blue"
                          ? "border-blue-500/20"
                          : "border-teal-500/20"
                      }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Social Links & Fun Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <Card className="glass p-8 border-2 border-purple-500/10 hover:border-purple-500/20 transition-colors">
              <h3 className="text-2xl font-bold gradient-text-primary">
                Follow me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg hover:bg-accent/50 transition-colors group border-2 ${
                      social.color === "purple"
                        ? "border-purple-500/10 hover:border-purple-500/30"
                        : "border-blue-500/10 hover:border-blue-500/30"
                    }`}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-accent transition-colors border-2 ${
                        social.color === "purple"
                          ? "border-purple-500/20"
                          : "border-blue-500/20"
                      }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Fun Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass p-8 rounded-xl text-center border-2 border-primary/10"
            >
              <p className="text-muted-foreground italic text-lg gradient-text-multi">
                "The best way to predict the future is to create it together!"
              </p>
              <motion.div
                className="mt-4 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Let's build something amazing! ✨
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-current" />
            </motion.div>
            <span className="gradient-text-primary">
              by Shane Angela Palicpic
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
