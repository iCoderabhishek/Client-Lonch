import React from 'react';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-4 uppercase">
          Documentation
        </h1>
        <p className="text-gray-400 font-sans text-xl mb-16 max-w-2xl">
          Everything you need to know about deploying and scaling your applications on Lonch.
        </p>
        
        <div className="space-y-16">
          
          <section id="getting-started" className="scroll-mt-32">
            <h2 className="text-2xl font-heading text-white mb-6 border-b border-white/10 pb-4">Getting Started</h2>
            <div className="space-y-4 text-gray-400 font-sans leading-relaxed">
              <p>
                Lonch provides a seamless deployment experience for both Static Frontends (like React, Next.js, and Vue) 
                and Dockerized Backends (like Node.js, Python, or Go). 
              </p>
              <p>
                To get started, navigate to your <Link href="/dashboard" className="text-cyan-400 hover:underline">Dashboard</Link>, click 
                <strong> New Project</strong>, and connect your GitHub repository. Once authenticated, 
                you can select any repository and branch to deploy.
              </p>
            </div>
          </section>

          <section id="static-deployments" className="scroll-mt-32">
            <h2 className="text-2xl font-heading text-white mb-6 border-b border-white/10 pb-4">Static Deployments</h2>
            <div className="space-y-4 text-gray-400 font-sans leading-relaxed">
              <p>
                When you deploy a Static site, Lonch provisions a secure build container to fetch your code, install dependencies, 
                and run your build command. The resulting output directory (e.g., <code>dist</code> or <code>.next</code>) is then 
                automatically uploaded to our highly available S3 buckets and served instantly worldwide through our CDN.
              </p>
              <p>
                <strong>Auto-Detection:</strong> Our build system automatically detects popular frameworks like Next.js, React, and Vite, 
                pre-filling your build commands and output directories for you.
              </p>
            </div>
          </section>

          <section id="backend-deployments" className="scroll-mt-32">
            <h2 className="text-2xl font-heading text-white mb-6 border-b border-white/10 pb-4">Backend & API Deployments</h2>
            <div className="space-y-4 text-gray-400 font-sans leading-relaxed">
              <p>
                Backend deployments on Lonch leverage AWS Elastic Container Service (ECS) and AWS Fargate for serverless container execution.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>We automatically generate a <code>Dockerfile</code> for you if one isn't present in your repository.</li>
                <li>Your code is built into a container image and pushed securely to our private AWS Elastic Container Registry (ECR).</li>
                <li>A new ECS Fargate task is spun up, exposing your specified port. Our dynamic Application Load Balancer seamlessly routes traffic to your new container without any downtime.</li>
              </ul>
            </div>
          </section>

          <section id="environment-variables" className="scroll-mt-32">
            <h2 className="text-2xl font-heading text-white mb-6 border-b border-white/10 pb-4">Environment Variables</h2>
            <div className="space-y-4 text-gray-400 font-sans leading-relaxed">
              <p>
                You can configure Environment Variables during project creation or manage them later in your Project Settings.
              </p>
              <p>
                For <strong>Static Sites</strong> (like Next.js), variables prefixed with <code>NEXT_PUBLIC_</code> or <code>VITE_</code> 
                are injected securely during the build time to be included in your static bundle.
              </p>
              <p>
                For <strong>Backend Apps</strong>, variables are securely passed into your AWS ECS Fargate container at runtime, ensuring 
                your sensitive API keys and secrets never leak into your build logs or container images.
              </p>
            </div>
          </section>

          <section id="custom-domains" className="scroll-mt-32">
            <h2 className="text-2xl font-heading text-white mb-6 border-b border-white/10 pb-4">Custom Domains</h2>
            <div className="space-y-4 text-gray-400 font-sans leading-relaxed">
              <p>
                Every project is assigned a free <code>project-slug.lonch.cloud</code> subdomain by default. 
                To use your own domain, simply go to the Domains tab of your project and add it.
              </p>
              <p>
                You will be provided with an A Record (IP Address) and a TXT Record to configure in your DNS provider 
                (like Cloudflare, GoDaddy, or Route53). Once verified, our edge proxies automatically generate and renew 
                SSL certificates for your domain.
              </p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
