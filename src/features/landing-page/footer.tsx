import React from "react";
import Link from "next/link";
import { Layers01Icon } from "hugeicons-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 opacity-20">
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
        <div className="w-[1px] h-full bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3 mb-8 md:mb-0">
          <Layers01Icon className="w-6 h-6 text-white" />
          <span className="font-heading font-bold text-lg tracking-wider text-white">LONCH</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <a href="mailto:support@lonch.cloud" className="text-xs font-sans text-gray-400 hover:text-white transition-colors">support@lonch.cloud</a>
          <Link href="/privacy" className="text-xs font-sans text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-xs font-sans text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          <span className="text-xs font-sans text-gray-600">© 2026 Lonch Inc.</span>
        </div>
      </div>
    </footer>
  );
}
