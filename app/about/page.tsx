import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export const metadata: Metadata = {
  title: "About Lonch – Our Mission, Architecture & Founder",
  description:
    "Lonch is a cloud deployment platform built by Abhishek Jha. We bridge the simplicity of PaaS with the raw power of AWS — ECS Fargate, S3, CloudFront, and auto-SSL. Founded in 2026 in India.",
  alternates: { canonical: "https://lonch.cloud/about" },
  openGraph: {
    title: "About Lonch | Cloud Deployment Platform",
    description: "Our mission: give every developer enterprise-grade AWS infrastructure without the ops overhead. Built by Abhishek Jha.",
    url: "https://lonch.cloud/about",
  },
};

const architectureLayers = [
  {
    name: "GitHub Integration",
    description: "OAuth + GitHub App installation. Webhooks trigger automatic redeployments on every push to main.",
  },
  {
    name: "Build Engine",
    description: "BullMQ job queue backed by Redis. Isolated Docker containers clone your repo, install dependencies, and execute builds — with live log streaming over WebSockets.",
  },
  {
    name: "Static Hosting Pipeline",
    description: "Build output is uploaded to Amazon S3, distributed globally via CloudFront CDN, and routed via Lambda@Edge using Host header rewriting.",
  },
  {
    name: "Backend Deployment Pipeline",
    description: "Docker images are built, tagged, and pushed to Amazon ECR. ECS Fargate orchestrates zero-downtime rolling deployments behind an Application Load Balancer.",
  },
  {
    name: "Domain & SSL Layer",
    description: "Custom domains are verified via DNS CNAME. SSL certificates are auto-provisioned through AWS ACM and attached via SNI to CloudFront or ALB.",
  },
];

const roadmapItems = [
  "Multi-cloud support (GCP, Azure) for vendor-agnostic deployments",
  "Team collaboration with role-based access control (RBAC)",
  "Preview deployments for every pull request",
  "Managed databases (PostgreSQL, Redis) with one-click provisioning",
  "CLI tool for deployments from your terminal",
  "GitHub Actions integration for custom CI/CD pipelines",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-10 uppercase">
          About Lonch
        </h1>

        <div className="prose prose-invert prose-p:font-sans prose-p:text-gray-400 prose-h2:font-heading prose-h2:text-white prose-h2:tracking-wide max-w-none">
          <p className="text-xl mb-12">
            Lonch is a next-generation cloud deployment platform that lets developers deploy any application — static sites,
            backend APIs, or full-stack apps — to production-grade AWS infrastructure in seconds. No Kubernetes. No Terraform.
            No DevOps required.
          </p>

          {/* ─── Founder ─── */}
          <h2 className="text-2xl mt-12 mb-4">Founder</h2>
          <div className="not-prose mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/10 relative bg-black shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                <Image
                  src="/avatar.png"
                  alt="Abhishek Jha - Founder of Lonch"
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-heading tracking-wider text-lg mb-1">Abhishek Jha</h3>
                <p className="text-cyan-500 font-sans text-sm mb-3">Founder</p>
                <p className="text-gray-400 font-sans text-sm leading-relaxed mb-4">
                  Full-stack engineer and distributed systems enthusiast. Built Lonch because deploying
                  a containerized backend to AWS shouldn&apos;t require writing 500 lines of CloudFormation
                  YAML. Previously worked on cloud infrastructure and developer tooling projects.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:founder@lonch.cloud"
                    className="text-sm font-sans text-gray-500 hover:text-white transition-colors"
                  >
                    founder@lonch.cloud ↗
                  </a>
                  <a
                    href="https://www.0bhishek.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans text-gray-500 hover:text-white transition-colors"
                  >
                    0bhishek.com ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/0bhishek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans text-gray-500 hover:text-white transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Company Info ─── */}
          <div className="not-prose mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center">
                <div className="text-cyan-500 font-heading font-bold text-lg mb-1">Founded</div>
                <div className="text-gray-400 font-sans text-sm">2026</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center">
                <div className="text-cyan-500 font-heading font-bold text-lg mb-1">Based In</div>
                <div className="text-gray-400 font-sans text-sm">Jalpaiguri, West Bengal, India</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center">
                <div className="text-cyan-500 font-heading font-bold text-lg mb-1">Infrastructure</div>
                <div className="text-gray-400 font-sans text-sm">100% AWS Native</div>
              </div>
            </div>
          </div>

          {/* ─── The Problem ─── */}
          <h2 className="text-2xl mt-12 mb-4">The Problem We Solve</h2>
          <p className="mb-4">
            Deploying applications to the cloud today falls into two painful extremes:
          </p>
          <div className="not-prose mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h4 className="text-white font-heading tracking-wider text-sm mb-3">PaaS Solutions (Vercel, Netlify, Heroku)</h4>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  Simple to use, but expensive at scale. Vendor lock-in. Limited control over
                  infrastructure. Heroku killed its free tier. Vercel charges premium prices for
                  serverless functions.
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h4 className="text-white font-heading tracking-wider text-sm mb-3">Raw AWS / Self-Hosting</h4>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  Powerful and cost-effective, but requires deep DevOps expertise. ECS task definitions,
                  CloudFormation stacks, IAM roles, VPC networking — a single backend deployment can
                  take days to set up correctly.
                </p>
              </div>
            </div>
          </div>
          <p className="mb-6">
            <strong className="text-white">Lonch bridges this gap.</strong> We give you the simplicity of a PaaS
            with the raw power, scalability, and cost-efficiency of AWS. Import your GitHub repo, click deploy,
            and your app runs on the same enterprise-grade infrastructure used by Fortune 500 companies.
          </p>

          {/* ─── Architecture ─── */}
          <h2 className="text-2xl mt-12 mb-4">Technical Architecture</h2>
          <p className="mb-6">
            Lonch is architecturally split into two planes: a <strong className="text-white">Control Plane</strong> (the
            Lonch API, built with Bun and Node.js) that handles auth, project management, and orchestration, and
            a <strong className="text-white">Data/Execution Plane</strong> (AWS infrastructure) where customer code
            actually builds and runs.
          </p>

          <div className="not-prose mb-8">
            <div className="flex flex-col gap-3">
              {architectureLayers.map((layer, index) => (
                <div
                  key={layer.name}
                  className="flex gap-4 bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
                >
                  <span className="text-cyan-500/40 font-heading font-bold text-lg flex-shrink-0 w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-white font-heading tracking-wider text-sm mb-1.5">{layer.name}</h4>
                    <p className="text-gray-500 font-sans text-sm leading-relaxed">{layer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── What Makes Lonch Different ─── */}
          <h2 className="text-2xl mt-12 mb-4">What Makes Lonch Different</h2>
          <div className="not-prose mb-8">
            <ul className="space-y-3">
              {[
                "Isolated Docker builds — your code never runs on shared hosts or interferes with other users",
                "Zero-downtime deployments — ECS rolling updates keep old containers alive until new ones pass health checks",
                "Real-time build logs — streamed over WebSockets so you can watch your deployment happen live",
                "Auto-generated Dockerfiles — we detect your framework and generate optimized container configs",
                "Wildcard SSL — every deployment gets HTTPS automatically via AWS ACM certificate provisioning",
                "GitHub webhook integration — push to main and your app auto-redeploys in seconds",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-400 font-sans text-sm">
                  <span className="text-cyan-500 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Roadmap ─── */}
          <h2 className="text-2xl mt-12 mb-4">Roadmap</h2>
          <p className="mb-6">
            Lonch is actively being developed. Here&apos;s what&apos;s coming next:
          </p>
          <div className="not-prose mb-8">
            <ul className="space-y-3">
              {roadmapItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-400 font-sans text-sm">
                  <span className="text-gray-600 mt-0.5 flex-shrink-0">◇</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── CTA ─── */}
          <div className="not-prose mt-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-white font-heading tracking-widest text-xl mb-4 uppercase">Ready to Deploy?</h3>
              <p className="text-gray-400 font-sans text-sm mb-6 max-w-lg mx-auto">
                Import your GitHub repository and deploy to AWS in under 60 seconds. No credit card required.
              </p>
              <Link
                href="/api/v1/auth/github"
                className="inline-block px-10 py-3 bg-white text-black font-sans font-bold tracking-widest text-sm uppercase rounded-sm hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
