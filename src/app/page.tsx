import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/sections/Welcome";
import FeatureBlocks from "@/components/sections/FeatureBlocks";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14 sm:pt-16">
        <Hero />
        <Welcome />
        <FeatureBlocks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
