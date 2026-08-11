import React from "react";
import { 
  DatabaseIcon, 
  Shield01Icon, 
  ChartLineData01Icon,
  Layers01Icon
} from "hugeicons-react";

// Minimalistic Custom Icons
const CubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const NetworkIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="16" y="16" width="6" height="6" rx="1"></rect>
    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
    <rect x="9" y="2" width="6" height="6" rx="1"></rect>
    <path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"></path>
    <path d="M12 8v3"></path>
  </svg>
);

const CloudStorageIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

export function Features() {
  return (
    <section className="bg-black py-24 border-b border-white/5 relative overflow-hidden" id="features">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 opacity-20">
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Features Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-widest uppercase">
            FEATURES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-32 relative">
          {/* Subtle Glow behind the grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="group border-t border-b border-l border-r md:border-r-0 md:border-t-0 md:border-b-0 border-white/10 p-10 hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 cursor-default relative overflow-hidden bg-black/40 backdrop-blur-sm">
            <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform duration-300">
              <CubeIcon className="w-8 h-8" />
            </div>
            <h4 className="text-white font-heading tracking-wider mb-4 text-xl group-hover:text-cyan-400 transition-colors">Isolated Build Environments</h4>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Every build runs in a secure, isolated AWS CodeBuild container. Zero cross-contamination, dedicated resources, and no host crashes.
            </p>
          </div>

          <div className="group border-t border-b border-l border-r md:border-r-0 md:border-t-0 md:border-b-0 border-white/10 p-10 hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 cursor-default relative overflow-hidden bg-black/40 backdrop-blur-sm">
            <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform duration-300">
              <NetworkIcon className="w-8 h-8" />
            </div>
            <h4 className="text-white font-heading tracking-wider mb-4 text-xl group-hover:text-cyan-400 transition-colors">Serverless Orchestration</h4>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Powered by AWS ECS and Fargate. Your backend containers automatically scale out during traffic spikes and scale down to zero when idle.
            </p>
          </div>

          <div className="group border-t border-b border-l border-r md:border-t-0 md:border-b-0 border-white/10 p-10 hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 cursor-default relative overflow-hidden bg-black/40 backdrop-blur-sm">
            <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform duration-300">
              <CloudStorageIcon className="w-8 h-8" />
            </div>
            <h4 className="text-white font-heading tracking-wider mb-4 text-xl group-hover:text-cyan-400 transition-colors">Global Edge Storage</h4>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Static assets are instantly synced to AWS S3 and globally distributed, ensuring lightning-fast load times for users anywhere in the world.
            </p>
          </div>
        </div>

        {/* Capabilities Block */}
        <div className="text-center mb-16 mt-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-widest uppercase mb-6">
            CAPABILITIES
          </h2>
          <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto">
            Everything you need to ship production-grade software. From automatic Git syncing to zero-downtime rollouts, we abstract away the complexity of DevOps so you can focus on writing code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          
          <div className="group border-t border-b border-l border-r md:border-r-0 md:border-t-0 border-white/10 p-10 hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 cursor-default bg-black/40 backdrop-blur-sm">
            <h4 className="text-white font-heading tracking-wider mb-4 text-xl group-hover:text-cyan-400 transition-colors">Static Deployments</h4>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Deploy React, Next.js, or Vite static assets instantly. Our automated Caddy reverse proxy handles wildcard domain routing and free SSL provisioning automatically.
            </p>
          </div>

          <div className="group border-t border-b border-l border-r md:border-r-0 md:border-t-0 border-white/10 p-10 hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 cursor-default bg-black/40 backdrop-blur-sm">
            <h4 className="text-white font-heading tracking-wider mb-4 text-xl group-hover:text-cyan-400 transition-colors">Backend Services</h4>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Deploy long-lived Node.js, Python, Rust, or Go applications directly to AWS ECR. We generate the Dockerfile, build the image, and orchestrate the deployment.
            </p>
          </div>

          <div className="group border-t border-b border-l border-r md:border-t-0 border-white/10 p-10 hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 cursor-default bg-black/40 backdrop-blur-sm">
            <h4 className="text-white font-heading tracking-wider mb-4 text-xl group-hover:text-cyan-400 transition-colors">Zero-Downtime Rollouts</h4>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Push your code and we handle the rest. ECS rolling deployments ensure your old containers stay alive until the new ones pass health checks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
