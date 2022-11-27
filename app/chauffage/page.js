import imgBanner from "/public/chaudiere.jpg";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/header/banner/Banner";
import MainPageService from "../../components/servicesPageModulable/mainPageService/MainPageService";
import Footer from "../../components/footer/Footer";

export default function Chauffage() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title="Chauffage" />
      </header>
      <main>
        <MainPageService title={"Chauffage"} imgMain={"/pellet2.png"} />
      </main>
      <Footer />
    </div>
  );
}
