import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, NewTwitterIcon } from "hugeicons-react";

const LonchLogo = ({ className }: { className?: string }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L26 14H6L16 2Z" fill="currentColor" />
    <path d="M6 20L16 26L26 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 26L16 30L22 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-xs mb-6">
              Empowering developers to harness the full potential of their data with cutting-edge computing solutions.
            </p>
            {/* Google Cloud Badge */}
            <div className="flex flex-col gap-4">
              <a
                href="https://cloud.google.com/startup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all w-fit group"
              >
                <div className="flex flex-col gap-[2px]">
                  <div className="flex gap-[2px]">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#4285F4]"></span>
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#EA4335]"></span>
                  </div>
                  <div className="flex gap-[2px]">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#FBBC05]"></span>
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#34A853]"></span>
                  </div>
                </div>
                <span className="text-xs font-sans text-gray-400 tracking-wide group-hover:text-gray-300 transition-colors">
                  Powered by <strong className="text-white font-medium">Google Cloud</strong><br />
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">for Startups</span>
                </span>
              </a>


            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading tracking-widest text-sm mb-2">PRODUCT</h4>
            <Link href="/deployments" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Deployments</Link>
            <Link href="/features" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Pricing</Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading tracking-widest text-sm mb-2">RESOURCES</h4>
            <Link href="/docs" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Docs</Link>
            <Link href="/status" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Status</Link>
            <Link href="/security" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Security</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading tracking-widest text-sm mb-2">COMPANY</h4>
            <Link href="/about" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/acceptable-use" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">Acceptable Use</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm font-sans text-gray-600">© 2026 Lonch. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/iCoderabhishek/Lonch" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/0bhishek" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <NewTwitterIcon className="w-5 h-5" />
            </a>
            <a href="mailto:support@lonch.cloud" className="text-sm font-sans text-gray-500 hover:text-white transition-colors">support@lonch.cloud</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
