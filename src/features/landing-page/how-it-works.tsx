"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github01Icon,
  Package01Icon,
  CloudUploadIcon,
  CheckmarkBadge01Icon,
} from "hugeicons-react";

const steps = [
  {
    number: "01",
    title: "Connect GitHub",
    description:
      "Sign in with GitHub, install the Lonch App on your repositories, and import the repo you want to deploy. We handle OAuth and permissions automatically.",
    icon: Github01Icon,
  },
  {
    number: "02",
    title: "We Build It",
    description:
      "Lonch spins up an isolated Docker container, clones your code, installs dependencies, and runs your build command. Watch it happen in real-time with live build logs streamed over WebSockets.",
    icon: Package01Icon,
  },
  {
    number: "03",
    title: "Deploy to AWS",
    description:
      "Static sites are uploaded to S3 and served globally via CloudFront CDN. Backend APIs are containerized, pushed to ECR, and orchestrated on ECS Fargate with zero-downtime rolling updates.",
    icon: CloudUploadIcon,
  },
  {
    number: "04",
    title: "Live in Seconds",
    description:
      "Your app is instantly accessible at a unique *.lonch.cloud subdomain with auto-provisioned SSL. Add a custom domain anytime — we handle DNS verification and certificate generation via AWS ACM.",
    icon: CheckmarkBadge01Icon,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HowItWorks() {
  return (
    <section
      className="bg-black py-24 border-b border-white/5 relative overflow-hidden"
      id="how-it-works"
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
            HOW IT WORKS
          </h2>
        </div>
        <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto text-center mb-20">
          Go from <code className="text-cyan-400 bg-white/5 px-2 py-0.5 rounded text-sm">git push</code> to a production URL in under 60 seconds. 
          Here&apos;s exactly what happens when you deploy on Lonch.
        </p>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500"
                variants={stepVariants}
              >
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-cyan-500/30 font-heading font-bold text-5xl tracking-widest select-none group-hover:text-cyan-500/50 transition-colors">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-white/5 text-cyan-500 group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white font-heading tracking-wider text-xl mb-4 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-cyan-500/40 to-transparent" />
                  <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-cyan-500/40 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom connector line */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-gray-500 font-sans text-sm tracking-wide">
              Push to <code className="text-cyan-400/70 bg-white/5 px-1.5 py-0.5 rounded text-xs">main</code> and we auto-redeploy via GitHub webhooks
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
