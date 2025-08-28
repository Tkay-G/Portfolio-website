import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container container mt-24 mx-auto px-5 py-10">
        <HeroSection />
      </div>
    </main>
  );
}
