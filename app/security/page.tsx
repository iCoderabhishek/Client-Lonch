import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export const metadata: Metadata = {
  title: "Platform Security – Isolated Builds, Encrypted Secrets & SSL",
  description:
    "Learn how Lonch secures your code with isolated AWS CodeBuild containers, encrypted environment variables, automated SSL via Let's Encrypt, and network-level protection through AWS ALB.",
  alternates: { canonical: "https://lonch.cloud/security" },
  openGraph: {
    title: "Platform Security | Lonch",
    description: "Isolated container builds, encrypted secrets, and auto-SSL. Security built into every layer.",
    url: "https://lonch.cloud/security",
  },
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-10 uppercase">
          Platform Security
        </h1>
        
        <div className="prose prose-invert prose-p:font-sans prose-p:text-gray-400 prose-h2:font-heading prose-h2:text-white prose-h2:tracking-wide max-w-none">
          <p className="text-xl mb-12">
            Security is built into the fabric of the Lonch platform. We leverage AWS's world-class infrastructure to ensure your code, secrets, and data remain isolated and protected.
          </p>

          <h2 className="text-2xl mt-12 mb-4">Isolated Container Builds</h2>
          <p className="mb-6">
            We do not run builds directly on shared VPS instances. Every build triggered on Lonch is executed inside a temporary, completely isolated Docker container using AWS CodeBuild. Once the build finishes and the image is pushed to AWS ECR, the container is destroyed, ensuring zero cross-contamination between tenants.
          </p>

          <h2 className="text-2xl mt-12 mb-4">Secrets Management</h2>
          <p className="mb-6">
            Your environment variables and application secrets are encrypted in transit and at rest. During deployment, they are securely injected directly into your AWS ECS Task Definitions, meaning they are never exposed in plaintext logs or accessible by unauthorized services.
          </p>
          
          <h2 className="text-2xl mt-12 mb-4">Network Security</h2>
          <p className="mb-6">
            All applications are deployed behind an AWS Application Load Balancer (ALB) and routed via our Caddy reverse proxy. We automatically provision and renew Let's Encrypt SSL certificates for all your custom domains, enforcing HTTPS across your entire application surface.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
