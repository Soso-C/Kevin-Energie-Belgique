import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/header/navbar/Navbar";
import TopBarHeader from "../components/header/topbarheader/TopBarHeader";
import Slider from "../components/slider/Slider";
import Partenaire from "../components/main/partenaires/Partenaire";
import Presentation from "../components/main/presentation/Presentation";
import SectionServices from "../components/main/sectionServices/SectionServices";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Slider />
      </header>
      <main>
        <Presentation />
        <SectionServices />
        <Partenaire />
      </main>
      <Footer />
    </div>
  );
}
