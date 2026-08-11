import React from 'react';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export default function AcceptableUsePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-10 uppercase">
          Acceptable Use Policy
        </h1>
        
        <div className="prose prose-invert prose-p:font-sans prose-p:text-gray-400 prose-h2:font-heading prose-h2:text-white prose-h2:tracking-wide max-w-none">
          <p className="text-xl mb-12">
            This Acceptable Use Policy outlines the rules and guidelines for using the Lonch platform. Our goal is to maintain a safe, secure, and reliable environment for all users.
          </p>

          <h2 className="text-2xl mt-12 mb-4">Prohibited Activities</h2>
          <p className="mb-6">
            When using the Lonch platform, you agree not to engage in any of the following activities:
          </p>
          <ul className="mb-6 list-disc pl-6 text-gray-400 font-sans">
            <li className="mb-2"><strong>Cryptocurrency Mining:</strong> You may not deploy any applications that mine cryptocurrency or engage in similar high-CPU background operations.</li>
            <li className="mb-2"><strong>Malicious Software:</strong> Hosting malware, viruses, trojans, or any software designed to compromise or disrupt systems.</li>
            <li className="mb-2"><strong>Phishing and Spam:</strong> Using Lonch to host phishing sites, send unsolicited bulk email, or deceive users.</li>
            <li className="mb-2"><strong>Illegal Content:</strong> Distributing or hosting content that violates any applicable local, national, or international laws.</li>
            <li className="mb-2"><strong>Network Abuse:</strong> Performing DDoS attacks, network scanning, or attempting to breach the security of any other network or host.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-4">Resource Limits</h2>
          <p className="mb-6">
            While we provide auto-scaling infrastructure, intentional abuse of the CodeBuild or ECS systems (e.g., triggering thousands of meaningless builds in an attempt to cause resource exhaustion) is strictly prohibited.
          </p>
          
          <h2 className="text-2xl mt-12 mb-4">Enforcement</h2>
          <p className="mb-6">
            We reserve the right to immediately suspend or terminate any project or account that violates this policy, without prior notice. If you believe your account was suspended in error, please contact <a href="mailto:support@lonch.cloud" className="text-white hover:underline">support@lonch.cloud</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
