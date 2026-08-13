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
    <main className='min-h-screen bg-black'>
      <Header />
      <div className='max-w-4xl mx-auto px-6 pt-40 pb-20'>
        <h1 className='text-4xl font-heading font-bold text-white uppercase mb-8'>Status</h1>
        <p className='text-gray-400 font-sans'>Coming soon.</p>
      </div>
      <Footer />
    </main>
  );
}
