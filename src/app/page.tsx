import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurServices from "@/components/sections/OurServices";
import FeaturedResources from "@/components/sections/FeaturedResources";
import SecurityRisks from "@/components/sections/SecurityRisks";
import WhoWeAre from "@/components/sections/WhoWeAre";
import LatestNews from "@/components/sections/LatestNews";
import Careers from "@/components/sections/Careers";
import Commitment from "@/components/sections/Commitment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[56px]">
        <Hero />
        <OurServices />
        <FeaturedResources />
        <SecurityRisks />
        <WhoWeAre />
        <LatestNews />
        <Careers />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
