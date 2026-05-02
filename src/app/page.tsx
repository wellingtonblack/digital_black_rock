import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientsStrip from "@/components/ClientsStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import Platforms from "@/components/Platforms";
import Clients from "@/components/Clients";
import CtaBanner from "@/components/CtaBanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ClientsStrip />
        <About />
        <Services />
        <Platforms />
        <Clients />
        <CtaBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
