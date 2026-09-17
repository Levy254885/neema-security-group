import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/sections/Welcome";
import FeatureBlocks from "@/components/sections/FeatureBlocks";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[64px]">
        <Hero />
        <Welcome />
        <FeatureBlocks />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
