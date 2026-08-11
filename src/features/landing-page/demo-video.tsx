import React from "react";
import { PlayIcon } from "hugeicons-react";

export function DemoVideo() {
  return (
    <section className="bg-black py-24 border-b border-white/5 relative overflow-hidden" id="demo">
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 opacity-20">
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-widest uppercase mb-12">
          LIVE DEMO
        </h2>

        <div className="relative w-full aspect-video bg-[#111] border border-white/10 rounded-xl flex items-center justify-center group cursor-pointer overflow-hidden hover:border-white/30 transition-colors shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
          
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 z-10">
            <PlayIcon className="w-8 h-8 text-white ml-1" />
          </div>
          
          <div className="absolute bottom-6 left-6 text-left z-10">
            <p className="text-white font-heading tracking-widest text-sm mb-1">LONCH IN ACTION</p>
            <p className="text-gray-500 font-sans text-sm">Watch how to deploy a full-stack app in 60 seconds.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
