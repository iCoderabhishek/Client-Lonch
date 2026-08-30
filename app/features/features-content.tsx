"use client";

import React from 'react';
import Image from 'next/image';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';
import { motion } from 'framer-motion';

import { 
  DatabaseIcon,
  GlobalIcon,
  Shield02Icon,
  Activity02Icon,
  GitBranchIcon,
  PlayCircle02Icon
} from "hugeicons-react";

const features = [
  {
    title: "Serverless AWS Backends",
    description: "We compile your backend into Docker images and deploy them onto AWS ECS Fargate, scaling your API workloads infinitely with zero server maintenance. Never worry about provisioning EC2 instances again.",
    icon: <DatabaseIcon className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/20",
    videoPlaceholderText: "Serverless Scaling Demo",
    imageSrc: "/images/features/serverless.jpg",
    align: "left"
  },
  {
    title: "Branch Deployments & Previews",
    description: "Select any branch from your GitHub repository to deploy. Instantly fetch the latest commits and trigger isolated builds without affecting production. Perfect for staging environments and QA.",
    icon: <GitBranchIcon className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/20",
    videoPlaceholderText: "Branch Preview Demo",
    imageSrc: "/images/features/branch.jpg",
    align: "right"
  },
  {
    title: "Global Edge CDN",
    description: "Deploy React, Next.js, and Vite apps in seconds. We instantly push your static assets to highly available S3 buckets distributed through our edge network for lightning-fast global load times.",
    icon: <GlobalIcon className="w-8 h-8 text-green-400" />,
    color: "from-green-500/20 to-emerald-500/20",
    videoPlaceholderText: "Global Edge Routing Demo",
    imageSrc: "/images/features/cdn.jpg",
    align: "left"
  },
  {
    title: "Live Log Streaming",
    description: "Watch your builds execute in real-time through Server-Sent Events (SSE). Monitor your Docker container startup processes and live application logs straight from the dashboard.",
    icon: <Activity02Icon className="w-8 h-8 text-orange-400" />,
    color: "from-orange-500/20 to-red-500/20",
    videoPlaceholderText: "Live SSE Logs Demo",
    imageSrc: "/images/features/logs.jpg",
    align: "right"
  },
  {
    title: "Automated SSL & Domains",
    description: "Bring your own custom domain. We automatically manage verification, DNS propagation checks, and SSL certificate provisioning via Let's Encrypt with automated renewals.",
    icon: <Shield02Icon className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/20 to-amber-500/20",
    videoPlaceholderText: "Custom Domain Provisioning Demo",
    imageSrc: "/images/features/ssl.jpg",
    align: "left"
  }
];

export function FeaturesContent() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white tracking-widest mb-6 uppercase"
          >
            Built for Scale
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 font-sans text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to build, deploy, and orchestrate modern web applications on AWS infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Alternating Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 space-y-40">
          
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.1 }
                }
              }}
              className={`flex flex-col gap-12 lg:gap-24 items-center ${
                feature.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              
              {/* Text Content */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: feature.align === 'left' ? -40 : 40, filter: 'blur(10px)' },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    filter: 'blur(0px)',
                    transition: { type: "spring", stiffness: 50, damping: 20 }
                  }
                }}
                className="w-full lg:w-1/2"
              >
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { type: "spring" } }
                  }}
                  className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-2xl shadow-cyan-900/20"
                >
                  {feature.icon}
                </motion.div>
                
                <motion.h2 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                  }}
                  className="text-3xl md:text-4xl font-heading font-bold text-white mb-6"
                >
                  {feature.title}
                </motion.h2>
                
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                  }}
                  className="text-gray-400 font-sans text-lg leading-relaxed mb-8"
                >
                  {feature.description}
                </motion.p>
                
                <motion.ul 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                  }}
                  className="space-y-4 mb-8"
                >
                  <motion.li 
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center text-gray-300 font-sans"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                    Zero configuration required
                  </motion.li>
                  <motion.li 
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center text-gray-300 font-sans"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                    Production ready in seconds
                  </motion.li>
                </motion.ul>
              </motion.div>

              {/* Media Placeholder */}
              <motion.div 
                variants={{
                  hidden: { 
                    opacity: 0, 
                    scale: 0.9, 
                    rotateX: 15,
                    y: 40,
                    filter: 'blur(10px)'
                  },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    rotateX: 0,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { type: "spring", stiffness: 40, damping: 15, delay: 0.3 }
                  }
                }}
                className="w-full lg:w-1/2 relative group perspective-1000"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 rounded-full`} />
                
                {/* 
                  TODO: REPLACE THIS DIV WITH A <video> or <img> tag!
                  Example for video:
                  <video autoPlay loop muted playsInline className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-white/10 shadow-2xl bg-black">
                    <source src="/videos/my-demo.mp4" type="video/mp4" />
                  </video>
                  
                  Example for GIF:
                  <img src="/gifs/my-demo.gif" alt="Demo" className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-white/10 shadow-2xl bg-black" />
                */}
                <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col items-center justify-center">
                  
                  {/* Mock Window Header */}
                  <div className="absolute top-0 w-full z-10 h-10 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                  </div>

                  {/* Feature Image */}
                  <Image 
                    src={feature.imageSrc} 
                    alt={feature.title}
                    fill
                    className="object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  
                  {/* Image overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                </div>
              </motion.div>

            </motion.div>
          ))}
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-gradient-to-b from-black to-cyan-950/20 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-widest">
            Ready to ship faster?
          </h2>
          <p className="text-gray-400 font-sans text-xl mb-10 max-w-2xl mx-auto">
            Join the developers deploying production-ready applications on Lonch today.
          </p>
          <a 
            href="/dashboard" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded hover:bg-gray-200 transition-colors font-sans"
          >
            Start Building for Free
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
