import React from "react";
import { DatabaseIcon, Shield01Icon, ChartLineData01Icon } from "hugeicons-react";

export function Features() {
  return (
    <section className="bg-black py-24 border-b border-white/5 relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 opacity-20">
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-b border-white/10 pb-20">
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-3 text-white font-heading tracking-wide text-sm md:text-base">
              <DatabaseIcon className="w-5 h-5 text-gray-400" />
              Isolated Containerized Builds
            </h3>
            <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
              We execute every build step in secure, isolated Docker containers on AWS CodeBuild, guaranteeing reliable builds without resource contention or crashing the host.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-3 text-white font-heading tracking-wide text-sm md:text-base">
              <Shield01Icon className="w-5 h-5 text-gray-400" />
              Live Log Streaming
            </h3>
            <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
              Never guess what's happening. Build logs are broadcasted in real-time using Redis Pub/Sub and SSE. Application logs are continuously streamed straight from CloudWatch.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-3 text-white font-heading tracking-wide text-sm md:text-base">
              <ChartLineData01Icon className="w-5 h-5 text-gray-400" />
              Serverless Auto-Scaling
            </h3>
            <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
              Powered by AWS ECS and Fargate. Your backend apps automatically scale out during massive traffic spikes and scale down gracefully to save costs when idle.
            </p>
          </div>
        </div>

        {/* Main Features Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-widest uppercase">
            CAPABILITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="border-t border-b border-l border-r md:border-r-0 md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Static Deployments</h4>
            <p className="text-gray-500 font-sans text-sm">
              Deploy static assets to AWS S3 instantly with automated Caddy reverse proxy routing for wildcard domains.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border-b border-l border-r md:border-r-0 md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Backend Services</h4>
            <p className="text-gray-500 font-sans text-sm">
              Deploy long-lived Node.js, Python, or Go apps directly to AWS ECR and ECS with rolling deployments.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border-b border-l border-r md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Automated Git Sync</h4>
            <p className="text-gray-500 font-sans text-sm">
              Push your code and we handle the rest. Automatic repository cloning and Dockerfile generation included.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
