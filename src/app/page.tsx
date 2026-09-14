import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import WhyNeema from "@/components/sections/WhyNeema";
import Industries from "@/components/sections/Industries";
import Standards from "@/components/sections/Standards";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <WhyNeema />
        <Industries />
        <Standards />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
