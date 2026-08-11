import React from "react";
import Link from "next/link";

const LonchLogo = ({ className }: { className?: string }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L26 14H6L16 2Z" fill="currentColor"/>
    <path d="M6 20L16 26L26 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 26L16 30L22 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <LonchLogo className="w-8 h-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <span className="font-heading font-bold text-xl tracking-wider text-white">LONCH</span>
            </Link>
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-xs">
              Empowering developers to harness the full potential of their data with cutting-edge computing solutions.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading tracking-widest text-sm mb-2">PRODUCT</h4>
            <Link href="/deployments" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Deployments</Link>
            <Link href="/features" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Pricing</Link>
            <Link href="/docs" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Docs</Link>
            {/* <Link href="/changelog" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Changelog</Link> */}
            {/* <Link href="/status" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Status</Link> */}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading tracking-widest text-sm mb-2">COMPANY</h4>
            <Link href="/about" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Contact</Link>
            <Link href="/security" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Security</Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading tracking-widest text-sm mb-2">LEGAL</h4>
            <Link href="/privacy" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/acceptable-use" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Acceptable Use</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm font-sans text-gray-600">© 2026 Lonch Inc. All rights reserved.</span>
          <a href="mailto:support@lonch.cloud" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">support@lonch.cloud</a>
        </div>
      </div>
    </footer>
  );
}
