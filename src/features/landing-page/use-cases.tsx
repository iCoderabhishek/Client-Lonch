"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CodeIcon,
  Rocket01Icon,
  UserGroupIcon,
} from "hugeicons-react";

const useCases = [
  {
    icon: CodeIcon,
    audience: "Indie Hackers & Solo Developers",
    headline: "Ship your SaaS MVP to AWS in minutes, not days",
    description:
      "Stop wrestling with Dockerfiles, ECS task definitions, and CloudFormation templates. Import your GitHub repo, pick your framework, and deploy. Lonch handles the entire CI/CD pipeline — from building your Docker image to provisioning a load-balanced, auto-scaled production environment on AWS.",
    techStack: ["Next.js", "React", "Node.js", "Python", "Go", "Rust"],
  },
  {
    icon: Rocket01Icon,
    audience: "Early-Stage Startups",
    headline: "Production-grade AWS infrastructure without a DevOps hire",
    description:
      "Get the same containerized, auto-scaling infrastructure that enterprises use — ECS Fargate, Application Load Balancers, ECR, S3 + CloudFront — without the $150K/year DevOps engineer. Lonch gives your 3-person team the deployment velocity of a 50-person engineering org.",
    techStack: ["Auto-SSL", "Custom Domains", "Environment Variables", "Rollbacks"],
  },
  {
    icon: UserGroupIcon,
    audience: "Dev Agencies & Freelancers",
    headline: "Deploy client projects with isolated environments and custom domains",
    description:
      "Each project gets its own isolated build environment and deployment pipeline. No cross-contamination between clients. Attach custom domains with automatic SSL provisioning, and give clients a production URL they can share with stakeholders — all on enterprise-grade AWS infrastructure.",
    techStack: ["Isolated Builds", "Wildcard Domains", "Live Build Logs", "Zero-Downtime"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export function UseCases() {
  return (
    <section
      className="bg-black py-24 border-b border-white/5 relative overflow-hidden"
      id="use-cases"
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
            WHO IT&apos;S FOR
          </h2>
        </div>
        <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto text-center mb-20">
          Whether you&apos;re a solo developer shipping a side project or a startup scaling to thousands
          of users, Lonch gives you enterprise-grade AWS infrastructure with zero ops overhead.
        </p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.audience}
                className="group relative flex flex-col bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500"
                variants={cardVariants}
              >
                {/* Icon + Audience */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 text-cyan-500 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-heading text-gray-500 tracking-widest uppercase group-hover:text-gray-400 transition-colors">
                    {useCase.audience}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-white font-heading tracking-wider text-lg mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                  {useCase.headline}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8 flex-grow">
                  {useCase.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {useCase.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-sans text-gray-500 bg-white/5 border border-white/10 rounded-full px-3 py-1 group-hover:border-cyan-500/20 group-hover:text-gray-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
