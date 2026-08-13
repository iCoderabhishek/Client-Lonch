import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export const metadata: Metadata = {
  title: "Changelog – Latest Updates & Platform Improvements",
  description:
    "Stay up to date with the latest Lonch platform updates, new features, bug fixes, and infrastructure improvements.",
  alternates: { canonical: "https://lonch.cloud/changelog" },
  openGraph: {
    title: "Changelog | Lonch",
    description: "Latest updates and improvements to the Lonch cloud deployment platform.",
    url: "https://lonch.cloud/changelog",
  },
};

export default function Page() {
  return (
    <main className='min-h-screen bg-black'>
      <Header />
      <div className='max-w-4xl mx-auto px-6 pt-40 pb-20'>
        <h1 className='text-4xl font-heading font-bold text-white uppercase mb-8'>Changelog</h1>
        <p className='text-gray-400 font-sans'>Coming soon.</p>
      </div>
      <Footer />
    </main>
  );
}
