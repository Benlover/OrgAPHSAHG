import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome/>
      <Footer/>
    </main>
  );
}
