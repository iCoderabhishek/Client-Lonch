import React from "react";
import type { Metadata } from "next";
import { Header } from "@/features/landing-page/header";
import { Footer } from "@/features/landing-page/footer";

export const metadata: Metadata = {
  title: "Terms and Conditions – Lonch Platform Usage Agreement",
  description:
    "Review the terms and conditions governing your use of the Lonch cloud deployment platform, including service descriptions, user responsibilities, and liability limitations.",
  alternates: { canonical: "https://lonch.cloud/terms" },
  openGraph: {
    title: "Terms and Conditions | Lonch",
    description: "Terms governing use of the Lonch deployment platform.",
    url: "https://lonch.cloud/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/20">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-10">
          TERMS AND CONDITIONS
        </h1>
        
        <div className="prose prose-invert prose-p:font-sans prose-p:text-gray-400 prose-h2:font-heading prose-h2:text-white prose-h2:tracking-wide max-w-none">
          <p className="mb-6">Last updated: August 2026</p>
          
          <h2 className="text-2xl mt-12 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing and using the Lonch platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
          </p>

          <h2 className="text-2xl mt-12 mb-4">2. Description of Service</h2>
          <p className="mb-6">
            Lonch provides a cloud deployment platform allowing users to deploy static and backend applications using AWS infrastructure, including automated repository cloning, containerized builds, and live log streaming.
          </p>

          <h2 className="text-2xl mt-12 mb-4">3. User Responsibilities</h2>
          <p className="mb-6">
            You are entirely responsible for the content of, and any harm resulting from, your applications deployed via Lonch. You must not deploy malicious code, circumvent our security measures, or use the platform for illegal activities.
          </p>

          <h2 className="text-2xl mt-12 mb-4">4. Limitation of Liability</h2>
          <p className="mb-6">
            Lonch shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>

          <h2 className="text-2xl mt-12 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about these Terms, please contact us at: <br/>
            <a href="mailto:support@lonch.cloud" className="text-white hover:underline">support@lonch.cloud</a>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
