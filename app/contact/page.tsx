import React from 'react';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-10 uppercase">
          Contact Us
        </h1>

        <div className="prose prose-invert prose-p:font-sans prose-p:text-gray-400 prose-h2:font-heading prose-h2:text-white prose-h2:tracking-wide max-w-none">
          <p className="text-xl mb-12">
            Have questions about deploying your backend or static sites on Lonch? We're here to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <h2 className="text-2xl mt-0 mb-4">Technical Support</h2>
              <p className="mb-6">
                Need help with a deployment, build errors, or custom domains? Our engineering team is standing by.
              </p>
              <a href="mailto:support@lonch.cloud" className="text-white hover:underline font-bold">support@lonch.cloud</a>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <h2 className="text-2xl mt-0 mb-4">Enterprise Sales</h2>
              <p className="mb-6">
                Looking for custom VPC deployments, dedicated AWS CodeBuild instances, or SLAs?
              </p>
              <a href="mailto:sales@lonch.cloud" className="text-white hover:underline font-bold">support@lonch.cloud</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
