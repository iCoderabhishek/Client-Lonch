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
              Efficiency At The Edge
            </h3>
            <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
              With Edge Cloud, Your Data Doesn't Travel Far. Our Edge Computing Approach Processes Data Closer To Its Source, Reducing Latency, And Saving Bandwidth.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-3 text-white font-heading tracking-wide text-sm md:text-base">
              <Shield01Icon className="w-5 h-5 text-gray-400" />
              Unmatched Security
            </h3>
            <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
              Security Is Not An Afterthought; It's Built Into The Fabric Of Our Platform. From Encrypted Storage To Secure Transmissions, Your Data Is Protected Every Step Of The Way.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-3 text-white font-heading tracking-wide text-sm md:text-base">
              <ChartLineData01Icon className="w-5 h-5 text-gray-400" />
              Scalability For Tomorrow
            </h3>
            <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
              As Your Data Grows, So Does Our Capacity. Our Scalable Solutions Ensure That Your Growth Is Only Limited By Your Imagination, Not By Your Infrastructure.
            </p>
          </div>
        </div>

        {/* Main Features Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-widest uppercase">
            FEATURES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="border-l border-r md:border-r-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Edge Cloud Buckets</h4>
            <p className="text-gray-500 font-sans text-sm">
              Secure and scalable data storage that grows with your needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border-l border-r md:border-r-0 border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Cloud Functions</h4>
            <p className="text-gray-500 font-sans text-sm">
              Write, deploy, and execute code effortlessly at the edge.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border-l border-r border-white/10 p-8 hover:bg-white/5 transition-colors cursor-default">
            <h4 className="text-white font-heading tracking-wider mb-4 text-lg">Edge Containers</h4>
            <p className="text-gray-500 font-sans text-sm">
              Deploy applications seamlessly across diverse environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
