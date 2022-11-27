import React from "react";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/header/banner/Banner";
import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import MainPageService from "../../components/servicesPageModulable/mainPageService/MainPageService";
import imgBanner from "/public/sanitaire.jpg";

export default function Sanitaire() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} />
      </header>
      <main>
        <MainPageService title={"Sanitaire"} imgMain={"/sanitaire2.png"} />
      </main>
      <Footer />
    </div>
  );
}
