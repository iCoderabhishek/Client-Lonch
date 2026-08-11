"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Layers01Icon, Menu01Icon, Cancel01Icon } from "hugeicons-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <Layers01Icon className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
          <span className="font-heading font-bold text-xl tracking-wider text-white">LONCH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/docs" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">Docs</Link>
          <Link href="/about" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <Link href="/dashboard" className="hidden md:block px-6 py-2.5 bg-white/5 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] border border-white/10 text-white text-sm font-sans rounded transition-all duration-300">
          Start Building
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <Cancel01Icon className="w-6 h-6" /> : <Menu01Icon className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link href="/features" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading text-white hover:text-gray-300 transition-colors">Features</Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading text-white hover:text-gray-300 transition-colors">Pricing</Link>
          <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading text-white hover:text-gray-300 transition-colors">Docs</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading text-white hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading text-white hover:text-gray-300 transition-colors">Contact</Link>
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-4 mt-4 bg-white/10 border border-white/20 text-white font-sans rounded transition-colors">
            Start Building
          </Link>
        </div>
      </div>
    </header>
  );
}
