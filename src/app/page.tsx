import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
