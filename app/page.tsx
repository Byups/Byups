import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
