import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import ServicesIntro from "@/components/sections/ServicesIntro";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";
import EmergencyBar from "@/components/EmergencyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-14 lg:pb-0">
        <Hero />
        <TrustStrip />
        <About />
        <ServicesIntro />
        <Services />
        <Process />
        <Industries />
        <CTA />
      </main>
      <Footer />
      <EmergencyBar />
    </>
  );
}
