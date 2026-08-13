import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export const metadata: Metadata = {
  title: "Pricing – Free Cloud Hosting & Enterprise Plans",
  description:
    "Deploy static sites for free and scale backends with enterprise AWS infrastructure. Compare Lonch's Hobby and Custom plans — no credit card required.",
  alternates: { canonical: "https://lonch.cloud/pricing" },
  openGraph: {
    title: "Pricing – Free Cloud Hosting & Enterprise Plans | Lonch",
    description: "Deploy for free. Scale infinitely on AWS. Compare Lonch plans.",
    url: "https://lonch.cloud/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-6 uppercase">
            Simple Pricing
          </h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">
            Start deploying for free. Scale infinitely on AWS infrastructure when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors">
            <h3 className="text-2xl font-heading text-white mb-2">Hobby</h3>
            <div className="text-4xl font-bold font-heading text-white mb-6">$0<span className="text-lg text-gray-500 font-sans font-normal">/mo</span></div>
            <p className="text-gray-400 font-sans mb-8">Perfect for side projects and learning.</p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-gray-300 font-sans text-sm"><span className="text-white mr-3">✓</span> Unlimited Static Deployments</li>
              <li className="flex items-center text-gray-300 font-sans text-sm"><span className="text-white mr-3">✓</span> Up to 3 Backend Applications</li>
              <li className="flex items-center text-gray-300 font-sans text-sm"><span className="text-white mr-3">✓</span> Shared Build Infrastructure</li>
              <li className="flex items-center text-gray-300 font-sans text-sm"><span className="text-white mr-3">✓</span> Community Support</li>
            </ul>
            
            <Link href="/dashboard" className="block w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded transition-colors font-sans text-center">
              Deploy Now
            </Link>
          </div>

          {/* Custom Tier */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Enterprise
            </div>
            <h3 className="text-2xl font-heading text-white mb-2">Custom</h3>
            <div className="text-4xl font-bold font-heading text-white mb-6">Contact Us</div>
            <p className="text-gray-400 font-sans mb-8">For high-traffic applications and custom VPCs.</p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-gray-300 font-sans text-sm"><span className="text-white mr-3">✓</span> Unlimited Backend Applications</li>
              <li className="flex items-center text-gray-300 font-sans text-sm"><span className="text-white mr-3">✓</span> Custom AWS ECS Fargate Limits</li>
              <li className="flex items-center text-gray-300 font-sans text-sm"><span className="text-white mr-3">✓</span> Dedicated CodeBuild Instances</li>
              <li className="flex items-center text-gray-300 font-sans text-sm"><span className="text-white mr-3">✓</span> 24/7 Priority Support & SLAs</li>
            </ul>
            
            <Link href="/contact" className="block w-full py-3 bg-white text-black hover:bg-gray-200 border border-transparent rounded transition-colors font-sans font-medium text-center">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
