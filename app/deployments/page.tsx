import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';
import { Terminal, CheckCircle2, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Deployments – Zero-Downtime Rollouts & Instant Rollbacks",
  description:
    "Deploy with confidence on Lonch. Zero-downtime rollouts with AWS ALB health checks, instant one-click rollbacks, and full deployment history for every project.",
  alternates: { canonical: "https://lonch.cloud/deployments" },
  openGraph: {
    title: "Deploy with Confidence | Lonch",
    description: "Zero-downtime rollouts, instant rollbacks, and full deployment history.",
    url: "https://lonch.cloud/deployments",
  },
};

export default function DeploymentsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <Terminal className="w-16 h-16 text-cyan-400 mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-6 uppercase">
            Deploy with Confidence
          </h1>
          <p className="text-gray-400 font-sans text-xl max-w-2xl">
            From push to production in seconds. Lonch orchestrates your code across AWS infrastructure while keeping you in complete control.
          </p>
        </div>

        <div className="space-y-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-heading text-white">Zero-Downtime Rollouts</h2>
              <p className="text-gray-400 font-sans text-lg leading-relaxed">
                When you deploy a new version of your backend, our AWS Application Load Balancer seamlessly routes traffic to your new containers only after they report healthy. Your users will never experience a dropped connection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3" /> Automatic Health Checks</li>
                <li className="flex items-center text-gray-300"><CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3" /> Graceful Container Termination</li>
              </ul>
            </div>
            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
              {/* Abstract representation of a load balancer */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-800 rounded-lg animate-pulse" />
                <div className="w-16 h-16 bg-cyan-900 rounded-lg animate-pulse delay-75" />
                <div className="w-16 h-16 bg-gray-800 rounded-lg animate-pulse delay-150" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-heading text-white">Instant Rollbacks</h2>
              <p className="text-gray-400 font-sans text-lg leading-relaxed">
                Made a mistake? No problem. Lonch keeps a history of your Docker images and Static assets. Revert to any previous successful deployment with a single click.
              </p>
              <Link href="/dashboard" className="inline-flex items-center text-black bg-white hover:bg-gray-200 px-6 py-3 rounded font-medium transition-colors">
                <RotateCcw className="w-4 h-4 mr-2" />
                Try it out
              </Link>
            </div>
            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 aspect-video flex flex-col justify-center gap-4">
              <div className="bg-white/10 h-12 w-full rounded border border-green-500/50 flex items-center px-4"><span className="text-green-400 text-sm">Deployment #45 - SUCCESS</span></div>
              <div className="bg-red-500/10 h-12 w-full rounded border border-red-500/50 flex items-center px-4"><span className="text-red-400 text-sm">Deployment #46 - FAILED</span></div>
              <div className="bg-white/10 h-12 w-full rounded border border-white/20 flex items-center px-4 justify-between">
                <span className="text-gray-300 text-sm">Deployment #45 - REVERTED</span>
                <span className="text-xs bg-white text-black px-2 py-1 rounded">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
