import React from 'react';
import { Header } from '@/features/landing-page/header';
import { Footer } from '@/features/landing-page/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest mb-10 uppercase">
          About Lonch
        </h1>
        
        <div className="prose prose-invert prose-p:font-sans prose-p:text-gray-400 prose-h2:font-heading prose-h2:text-white prose-h2:tracking-wide max-w-none">
          <p className="text-xl mb-12">
            Lonch is a next-generation Cloud Deployment Platform designed to make shipping any kind of backend application or static site effortless, secure, and infinitely scalable.
          </p>

          <h2 className="text-2xl mt-12 mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe developers shouldn't have to choose between the simplicity of PaaS (Platform as a Service) and the raw power and scalability of AWS. Lonch bridges this gap. We empower developers to harness the full potential of enterprise-grade AWS infrastructure (ECS, Fargate, CodeBuild, S3) through a beautiful, automated, and developer-friendly interface.
          </p>

          <h2 className="text-2xl mt-12 mb-4">Built for Scale</h2>
          <p className="mb-6">
            Unlike traditional VPS hosts that crash during heavy build steps, Lonch utilizes isolated containerized builds. When you deploy, your code is spun up in an isolated environment, built securely, and pushed to AWS ECR. From there, AWS ECS takes over, automatically scaling your containers out during traffic spikes and down when idle.
          </p>
          
          <h2 className="text-2xl mt-12 mb-4">Who We Are</h2>
          <p className="mb-6">
            We are a team of distributed systems engineers and cloud architects obsessed with developer experience. We built Lonch because we were tired of managing complex Kubernetes clusters and manually writing CloudFormation scripts just to deploy a simple containerized backend. 
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
