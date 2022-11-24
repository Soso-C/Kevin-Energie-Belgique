import Head from "next/head";
import Image from "next/image";
import Banner from "../components/header/Banner";
import DevisGratuit from "../components/main/devisgratuit/DevisGratuit";
import Presentation from "../components/main/presentation/Presentation";
import SectionServices from "../components/main/sectionServices/SectionServices";
import Navbar from "../components/navbar/Navbar";
import TopBarHeader from "../components/topbarheader/TopBarHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>KD Energie | Accueil</title>
        <meta
          name="description"
          content="KD Energie est une jeune entreprise avec plus de 10 ans d'expériences et qui vous proposera ses services de chauffage, sanitaire, ventilation, pompe a chaleur, pellets située dans la commune d'Aywaille et de ses alentours"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner />
      </header>
      <main>
        <DevisGratuit />
        <Presentation />
        <SectionServices />
      </main>
    </div>
  );
}
