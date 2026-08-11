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
        <div className="flex flex-col items-start pt-10">
          <div className="pl-6 border-l-2 border-white/20 mb-10 py-2">
            <p className="text-gray-400 font-sans text-lg mb-2">Welcome to</p>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-heading font-bold text-white tracking-widest leading-[1.1] mb-6 uppercase">
              EDGE<br />CLOUD
            </h1>
            <p className="text-white font-sans text-lg md:text-xl tracking-wide font-light">
              The Future Of Distributed Computing
            </p>
          </div>

          <div className="pl-6 border-l-2 border-white/20 py-2 max-w-md">
            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
              We Empower Businesses And Developers To Harness The Full Potential Of Their Data With Cutting-Edge Computing Solutions.
            </p>
          </div>

          <div className="mt-16">
            <button className="px-10 py-4 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-sans tracking-wide text-sm transition-all duration-300">
              Start Building
            </button>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="relative flex justify-center items-center h-[600px]">
          {/* Subtle glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
          
          <Image 
            src="/assets/abstract-person.png"
            alt="Futuristic Abstract Person"
            width={800}
            height={800}
            className="relative z-10 object-contain w-full max-w-[500px] filter drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
