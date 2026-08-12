import { Header } from "@/features/landing-page/header";
import { Hero } from "@/features/landing-page/hero";
import { Features } from "@/features/landing-page/features";
import { DemoVideo } from "@/features/landing-page/demo-video";
import { Faq } from "@/features/landing-page/faq";
import { Footer } from "@/features/landing-page/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/20">
      <Header />
      <Hero />
      <Features />
      <DemoVideo />
      <Faq />
      <Footer />
    </main>
  );
}
