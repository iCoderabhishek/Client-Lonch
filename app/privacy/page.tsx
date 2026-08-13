import React from "react";
import type { Metadata } from "next";
import { Header } from "@/features/landing-page/header";
import { Footer } from "@/features/landing-page/footer";

export const metadata: Metadata = {
  title: "Privacy Policy – How Lonch Handles Your Data",
  description:
    "Read Lonch's privacy policy. Learn what data we collect, how we use it, and how your application secrets and personal information are protected.",
  alternates: { canonical: "https://lonch.cloud/privacy" },
  openGraph: {
    title: "Privacy Policy | Lonch",
    description: "How Lonch collects, uses, and protects your data.",
    url: "https://lonch.cloud/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/20">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-10">
          PRIVACY POLICY
        </h1>
        
        <div className="prose prose-invert prose-p:font-sans prose-p:text-gray-400 prose-h2:font-heading prose-h2:text-white prose-h2:tracking-wide max-w-none">
          <p className="mb-6">Last updated: August 2026</p>
          
          <h2 className="text-2xl mt-12 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            We collect information you provide directly to us, such as when you create an account, connect your GitHub repository, or communicate with us. This includes your name, email address, and repository metadata necessary for deployment.
          </p>

          <h2 className="text-2xl mt-12 mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to provide, maintain, and improve our platform. This includes executing builds, streaming logs, managing your AWS deployment infrastructure, and sending technical notices.
          </p>

          <h2 className="text-2xl mt-12 mb-4">3. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. Your application secrets and environment variables are encrypted in transit and at rest.
          </p>

          <h2 className="text-2xl mt-12 mb-4">4. Sharing of Information</h2>
          <p className="mb-6">
            We do not sell your personal information. We may share your information with third-party vendors, service providers, or contractors who perform services for us (such as AWS for infrastructure hosting).
          </p>

          <h2 className="text-2xl mt-12 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this policy, you may email us at: <br/>
            <a href="mailto:support@lonch.cloud" className="text-white hover:underline">support@lonch.cloud</a>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
