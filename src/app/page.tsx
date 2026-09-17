import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/sections/Welcome";
import FeatureBlocks from "@/components/sections/FeatureBlocks";
import ThreeSteps from "@/components/sections/ThreeSteps";
import OurServices from "@/components/sections/OurServices";
import SecurityRisks from "@/components/sections/SecurityRisks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[56px] lg:pt-[72px]">
        <Hero />
        <Welcome />
        <FeatureBlocks />
        <ThreeSteps />
        <div className="lg:hidden">
          <OurServices />
          <SecurityRisks />
        </div>
      </main>
      <Footer />
    </>
  );
}
