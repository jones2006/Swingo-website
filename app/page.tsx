import Footer from "@/components/Footer";
import Charms from "@/components/home/Charms";
import Demo from "@/components/home/Demo";
import DownloadCard from "@/components/home/DownloadCard";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

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
      <section id="charms">
        <Charms />
      </section>

      <DownloadCard />

      <Features />
      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </main>
  );
}
