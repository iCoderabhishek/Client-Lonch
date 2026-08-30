import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export const metadata: Metadata = {
  title: "System Status – Lonch Platform Health & Uptime",
  description:
    "Check the real-time status of the Lonch cloud deployment platform. Monitor uptime, build system health, and infrastructure availability.",
  alternates: { canonical: "https://lonch.cloud/status" },
  openGraph: {
    title: "System Status | Lonch",
    description: "Real-time platform health and uptime monitoring for Lonch.",
    url: "https://lonch.cloud/status",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10 min-h-[70vh]">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-10 uppercase">
          System Status
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading text-white mb-2">All Systems Operational</h2>
            <p className="text-gray-400 font-sans">Last updated: Just now</p>
          </div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl flex items-center justify-between">
            <span className="text-white font-sans">API & Dashboard</span>
            <span className="text-green-400 font-sans text-sm font-medium">Operational</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl flex items-center justify-between">
            <span className="text-white font-sans">Deployment Pipeline</span>
            <span className="text-green-400 font-sans text-sm font-medium">Operational</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl flex items-center justify-between">
            <span className="text-white font-sans">Log Streaming Service</span>
            <span className="text-green-400 font-sans text-sm font-medium">Operational</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl flex items-center justify-between">
            <span className="text-white font-sans">AWS Infrastructure</span>
            <span className="text-green-400 font-sans text-sm font-medium">Operational</span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
