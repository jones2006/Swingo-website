import Footer from "@/components/Footer";
import CharmsSection from "@/components/home/CharmsSection";
import CreatorSection from "@/components/home/CreatorSection";
import Demo from "@/components/home/Demo";
import DownloadCard from "@/components/home/DownloadCard";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import WingGoSection from "@/components/home/WingGoSection";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="no-scrollbar overflow-y-auto">
      <section id="nav">
        <Navbar />
      </section>

      <section id="hero">
        <Hero />
      </section>

      <section id="demo">
        <Demo />
      </section>

      {/* 1. Charms Categories */}
      <section id="charms">
        <CharmsSection />
      </section>

      <Features />

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="winggo">
        <WingGoSection />
      </section>

      <section id="download">
        <DownloadCard />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="creators">
        <CreatorSection />
      </section>

      <Footer />
    </main>
  );
}
