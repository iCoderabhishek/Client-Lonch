import React from "react";
import { Header } from "@/features/landing-page/header";
import { Hero } from "@/features/landing-page/hero";
import { Features } from "@/features/landing-page/features";
import { Footer } from "@/features/landing-page/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/20">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
