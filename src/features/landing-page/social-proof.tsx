"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "< 60s",
    label: "Average Deploy Time",
    description: "From git push to live production URL",
  },
  {
    value: "6+",
    label: "Languages Supported",
    description: "Node.js, Python, Go, Rust, Java & more",
  },
  {
    value: "100%",
    label: "AWS Native",
    description: "Built on ECS, Fargate, S3, CloudFront, ECR",
  },
  {
    value: "0",
    label: "DevOps Required",
    description: "No Kubernetes, no CloudFormation, no Terraform",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Vue",
  "Vite",
  "Node.js",
  "Express",
  "Python",
  "FastAPI",
  "Flask",
  "Go",
  "Rust",
  "Docker",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function SocialProof() {
  return (
    <section
      className="bg-black py-24 border-b border-white/5 relative overflow-hidden"
      id="stats"
    >
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 opacity-20">
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-widest uppercase">
            BY THE NUMBERS
          </h2>
        </div>
        <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto text-center mb-20">
          Lonch is purpose-built to give developers the power of AWS without the complexity. 
          Every deployment runs on battle-tested infrastructure.
        </p>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500"
              variants={itemVariants}
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-cyan-500 tracking-wider mb-2 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-white font-heading tracking-wider text-xs md:text-sm uppercase mb-2">
                {stat.label}
              </div>
              <p className="text-gray-500 font-sans text-xs leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Supported Technologies */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-widest uppercase mb-4">
            SUPPORTED TECHNOLOGIES
          </h3>
          <p className="text-gray-500 font-sans text-sm mb-10">
            Deploy any framework, any language. If it runs in Docker, it runs on Lonch.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              className="text-sm font-sans text-gray-400 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 hover:border-cyan-500/30 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
              variants={itemVariants}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* AWS Badge */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-400 font-sans text-sm">
              Powered by <span className="text-white font-medium">Amazon Web Services</span> — ECS Fargate · S3 · CloudFront · ECR · ACM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
