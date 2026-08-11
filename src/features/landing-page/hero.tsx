import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DatabaseIcon, Shield01Icon, ChartLineData01Icon } from "hugeicons-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] pt-20 flex flex-col items-center justify-center bg-black overflow-hidden border-b border-white/5 pb-20">
      {/* Subtle Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 opacity-20 z-0">
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative mb-10">

        {/* Left Content */}
        <div className="flex flex-col items-start pt-10 relative z-40">

          <div className="pl-6 border-l-2 border-white/20 mb-10 py-4 relative z-10">
            <p className="text-gray-400 font-sans text-lg mb-2">Welcome to</p>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-heading font-bold text-cyan-500 tracking-widest leading-[1.1] mb-6 uppercase">
              LONCH<br />CLOUD
            </h1>
            <p className="text-white font-sans text-lg md:text-xl tracking-wide font-light">
              The Next-Generation Cloud Deployment Platform
            </p>
          </div>

          <div className="pl-6 border-l-2 border-white/20 py-2 max-w-md relative z-10">
            <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed">
              Deploy any backend, frontend, or static site effortlessly. Harness the raw power and infinite scalability of AWS infrastructure without the operational overhead.
            </p>
          </div>

          <div className="mt-12 pl-6 mb-24 lg:mb-32 relative z-40">
            <Link
              href="/dashboard"
              className="group relative inline-block px-12 py-4 bg-white text-black font-sans font-bold tracking-widest text-base uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:text-white rounded-sm overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300">Start Building</span>
              <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
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
            className="relative z-10 object-contain w-full max-w-[400px] lg:max-w-[550px] filter drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Overlapping Glassmorphic Card (The 3 Columns) */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-30 lg:-mt-24">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_60px_rgba(34,211,238,0.15)] transition-all duration-500 relative overflow-hidden">
          
          {/* Subtle top glare */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            
            <div className="flex flex-col gap-4 group p-4 -m-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <h3 className="flex items-center gap-3 text-white font-heading tracking-wide text-sm md:text-base group-hover:text-cyan-400 transition-colors">
                <DatabaseIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                Efficiency At The Edge
              </h3>
              <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
                With Edge Cloud, Your Data Doesn't Travel Far. Our Edge Computing Approach Processes Data Closer To Its Source, Reducing Latency, And Saving Bandwidth.
              </p>
            </div>

            <div className="flex flex-col gap-4 group p-4 -m-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <h3 className="flex items-center gap-3 text-white font-heading tracking-wide text-sm md:text-base group-hover:text-cyan-400 transition-colors">
                <Shield01Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                Unmatched Security
              </h3>
              <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
                Security Is Not An Afterthought; It's Built Into The Fabric Of Our Platform. From Encrypted Storage To Secure Transmissions, Your Data Is Protected Every Step Of The Way.
              </p>
            </div>

            <div className="flex flex-col gap-4 group p-4 -m-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <h3 className="flex items-center gap-3 text-white font-heading tracking-wide text-sm md:text-base group-hover:text-cyan-400 transition-colors">
                <ChartLineData01Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                Scalability For Tomorrow
              </h3>
              <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed">
                As Your Data Grows, So Does Our Capacity. Our Scalable Solutions Ensure That Your Growth Is Only Limited By Your Imagination, Not By Your Infrastructure.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
