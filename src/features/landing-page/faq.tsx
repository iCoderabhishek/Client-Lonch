"use client";

import React, { useState } from "react";
import { ArrowDown01Icon } from "hugeicons-react";

const faqs = [
  {
    question: "What runtimes does Lonch support?",
    answer: "Lonch supports any kind of backend applications. Whether you use Node.js, Python, Go, Rust, or any custom Dockerfile, our platform can build and deploy it seamlessly alongside your static frontends."
  },
  {
    question: "How does serverless auto-scaling work?",
    answer: "We use AWS ECS with Fargate for backend deployments. Your containers automatically scale out during traffic spikes and scale down to zero when idle, ensuring you only pay for what you use."
  },
  {
    question: "Where are my static assets hosted?",
    answer: "Static assets are automatically uploaded to AWS S3, and we use a Caddy reverse proxy to route wildcard domains instantly with automatic SSL."
  },
  {
    question: "Is there a limit on build times?",
    answer: "Because we use AWS CodeBuild for isolated containerized builds, there is virtually no concurrency limit or strict timeout, preventing host server crashes even during resource-heavy builds."
  },
  {
    question: "Can I use custom domains?",
    answer: "Yes! You can attach any custom domain to your projects. Our automated Caddy reverse proxy handles routing and provisions free SSL certificates automatically."
  },
  {
    question: "How are my application logs handled?",
    answer: "Build logs are broadcasted to your dashboard in real-time using Redis Pub/Sub and SSE. Once deployed, persistent application logs are continuously streamed straight from AWS CloudWatch."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-24 border-b border-white/5 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 opacity-20">
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest uppercase">
            FAQ
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-white font-heading tracking-wide text-sm md:text-base">{faq.question}</h3>
                <ArrowDown01Icon className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </div>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-400 font-sans text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
