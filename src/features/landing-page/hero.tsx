import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] pt-20 flex items-center bg-black overflow-hidden border-b border-white/5">
      {/* Subtle Vertical Grid Lines matching inspiration */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 opacity-20">
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-start pt-10 relative">
          
          {/* Blurry Box Behind Text */}
          <div className="absolute top-0 -left-6 w-[120%] h-[110%] bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-2xl -z-10" />

          <div className="pl-6 border-l-2 border-white/20 mb-10 py-4 relative z-10">
            <p className="text-gray-400 font-sans text-lg mb-2">Welcome to</p>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-heading font-bold text-white tracking-widest leading-[1.1] mb-6 uppercase">
              LONCH
            </h1>
            <p className="text-white font-sans text-lg md:text-xl tracking-wide font-light">
              The Cloud Deployment Platform
            </p>
          </div>

          <div className="pl-6 border-l-2 border-white/20 py-2 max-w-md relative z-10">
            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
              Seamlessly deploy static sites and long-lived backend applications. We empower developers to harness isolated containerized builds, live log streaming, and serverless auto-scaling.
            </p>
          </div>

          <div className="mt-16 pl-6 relative z-10">
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/50 hover:bg-white/15 text-white font-sans tracking-wide text-sm transition-all duration-300 rounded">
              Start Building
            </button>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[600px] mt-12 lg:mt-0">
          {/* Subtle glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-white/5 rounded-full blur-[100px]" />
          
          <Image 
            src="/assets/abstract-person.png"
            alt="Futuristic Abstract Person"
            width={800}
            height={800}
            className="relative z-10 object-contain w-full max-w-[400px] lg:max-w-[500px] filter drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
