import React from "react";
import Link from "next/link";
import { Layers01Icon } from "hugeicons-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Layers01Icon className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
          <span className="font-heading font-bold text-xl tracking-wider text-white">LONCH</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">Features</Link>
          <Link href="#about" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="#use-cases" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">Use Cases</Link>
          <Link href="#technology" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">Technology</Link>
          <Link href="#faq" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">FAQ</Link>
          <Link href="#contact" className="text-sm font-sans text-gray-400 hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* CTA */}
        <Link href="/dashboard" className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-sans rounded transition-colors">
          Start Building
        </Link>
      </div>
    </header>
  );
}
