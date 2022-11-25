import Head from "next/head";
import Image from "next/image";
import Banner from "../components/header/Banner";
import DevisGratuit from "../components/main/devisgratuit/DevisGratuit";
import Presentation from "../components/main/presentation/Presentation";
import SectionServices from "../components/main/sectionServices/SectionServices";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import TopBarHeader from "../components/topbarheader/TopBarHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>KD Energie | Accueil</title>
        <meta
          name="description"
          content="KD Énergie située à Aywaille et ses alentours est une jeune
          entreprise spécialisée vous proposant ses services
          d'installation, dépannage et d'entretiens chauffage, sanitaire,
          ventilation (simple - double flux), pompe à chaleur et tous
          systèmes de chaudière à condensation gaz et mazout."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <TopBarHeader />
        <Navbar />
        <Slider />
      </header>
      <main>
        {/* <DevisGratuit /> */}
        <Presentation />
        <SectionServices />
      </main>
    </div>
  );
}
