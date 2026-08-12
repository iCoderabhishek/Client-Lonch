import React from 'react';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';
import { Server, Globe, Shield, Activity, GitBranch } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-6 uppercase">
            Platform Features
          </h1>
          <p className="text-gray-400 font-sans text-xl max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale modern web applications and APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-colors">
            <Globe className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-heading text-white mb-3">Global CDN for Static Sites</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Deploy React, Next.js, and Vue apps in seconds. We instantly push your static assets to highly available S3 buckets distributed through our edge network.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-colors">
            <Server className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-heading text-white mb-3">Serverless AWS Backends</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              We compile your backend into Docker images and deploy them onto AWS ECS Fargate, scaling your API workloads infinitely with zero server maintenance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-colors">
            <GitBranch className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-heading text-white mb-3">Branch Deployments</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Select any branch from your GitHub repository to deploy. Instantly fetch the latest commits and trigger isolated builds without affecting production.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-colors">
            <Activity className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-heading text-white mb-3">Live Log Streaming</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Watch your builds execute in real-time through Server-Sent Events (SSE). Monitor your Docker container startup processes straight from the dashboard.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-colors">
            <Shield className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-heading text-white mb-3">Automated SSL & Domains</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Bring your own custom domain. We automatically manage verification, DNS propagation checks, and SSL certificate provisioning via Let's Encrypt.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
