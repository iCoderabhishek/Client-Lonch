"use client";

import React, { useState, useRef } from "react";
import { PlayIcon, PauseIcon, VolumeHighIcon, VolumeOffIcon } from "hugeicons-react";

export function DemoVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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

        <div 
          onClick={togglePlay}
          className="relative w-full aspect-video bg-[#111] border border-white/10 rounded-xl flex items-center justify-center group cursor-pointer overflow-hidden hover:border-white/30 transition-colors shadow-2xl"
        >
          <video 
            ref={videoRef}
            src="/lonch-walkthrough.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          
          {/* Subtle gradient overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />
          
          {/* Play/Pause overlay indicator when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-transform duration-300 z-10">
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          )}

          {/* Mute / Unmute Button */}
          <button 
            onClick={toggleMute}
            className="absolute bottom-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
          >
            {isMuted ? (
              <VolumeOffIcon className="w-5 h-5 text-white" />
            ) : (
              <VolumeHighIcon className="w-5 h-5 text-white" />
            )}
          </button>
          
          <div className="absolute bottom-6 left-6 text-left z-10 pointer-events-none">
            <p className="text-white font-heading tracking-widest text-sm mb-1 drop-shadow-md">LONCH IN ACTION</p>
            <p className="text-gray-300 font-sans text-sm drop-shadow-md">Watch how to deploy a full-stack app in 60 seconds.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
