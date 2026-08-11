import React from 'react';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-4 uppercase">
          Documentation
        </h1>
        <p className="text-gray-400 font-sans text-xl mb-12 max-w-2xl">
          Everything you need to know about deploying and scaling your applications on Lonch.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Quickstart */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
            <h2 className="text-xl font-heading text-white mb-4 group-hover:text-gray-300">Quickstart Guide</h2>
            <p className="text-gray-400 font-sans text-sm mb-4">Learn how to connect your GitHub repository and deploy your first application in under 60 seconds.</p>
            <span className="text-white font-sans text-sm underline underline-offset-4">Read more</span>
          </div>

          {/* Backend Deployments */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
            <h2 className="text-xl font-heading text-white mb-4 group-hover:text-gray-300">Backend Deployments</h2>
            <p className="text-gray-400 font-sans text-sm mb-4">Configuring Node.js, Python, and Go applications. Understanding Dockerfile generation and exposed ports.</p>
            <span className="text-white font-sans text-sm underline underline-offset-4">Read more</span>
          </div>

          {/* Environment Variables */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
            <h2 className="text-xl font-heading text-white mb-4 group-hover:text-gray-300">Environment Variables</h2>
            <p className="text-gray-400 font-sans text-sm mb-4">How to securely inject secrets and configuration variables into your AWS ECS tasks.</p>
            <span className="text-white font-sans text-sm underline underline-offset-4">Read more</span>
          </div>

          {/* Custom Domains */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
            <h2 className="text-xl font-heading text-white mb-4 group-hover:text-gray-300">Custom Domains & SSL</h2>
            <p className="text-gray-400 font-sans text-sm mb-4">Setting up DNS records and understanding our automated Caddy reverse proxy routing.</p>
            <span className="text-white font-sans text-sm underline underline-offset-4">Read more</span>
          </div>

          {/* Log Streaming */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
            <h2 className="text-xl font-heading text-white mb-4 group-hover:text-gray-300">Log Streaming</h2>
            <p className="text-gray-400 font-sans text-sm mb-4">Accessing real-time build logs via SSE and querying persistent application logs from CloudWatch.</p>
            <span className="text-white font-sans text-sm underline underline-offset-4">Read more</span>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
