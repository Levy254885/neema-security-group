import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/sections/Welcome";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import WhyNeema from "@/components/sections/WhyNeema";
import Industries from "@/components/sections/Industries";
import Standards from "@/components/sections/Standards";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <Welcome />
        <Services />
        <About />
        <Approach />
        <WhyNeema />
        <Industries />
        <Standards />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
