import React from "react";

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

        <div className="grid grid-cols-1 md:grid-cols-3 mb-24">
          <div className="border-t border-b border-l border-r md:border-r-0 md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Edge Cloud Buckets</h4>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">
              Secure and scalable data storage that grows with your needs.
            </p>
          </div>

          <div className="border-b border-l border-r md:border-r-0 md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Cloud Functions</h4>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">
              Write, deploy, and execute code effortlessly at the edge.
            </p>
          </div>

          <div className="border-b border-l border-r md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Edge Containers</h4>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">
              Deploy applications seamlessly across diverse environments.
            </p>
          </div>
        </div>

        {/* Capabilities Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-widest uppercase">
            CAPABILITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border-t border-b border-l border-r md:border-r-0 md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Static Deployments</h4>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">
              Deploy static assets to AWS S3 instantly with automated Caddy reverse proxy routing for wildcard domains.
            </p>
          </div>

          <div className="border-b border-l border-r md:border-r-0 md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Backend Services</h4>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">
              Deploy long-lived Node.js, Python, or Go apps directly to AWS ECR and ECS with rolling deployments.
            </p>
          </div>

          <div className="border-b border-l border-r md:border-t-0 md:border-b-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Automated Git Sync</h4>
            <p className="text-gray-500 font-sans text-sm leading-relaxed">
              Push your code and we handle the rest. Automatic repository cloning and Dockerfile generation included.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
