import React from "react";
import imgBanner from "/public/ventilation.jpg";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/header/banner/Banner";
import MainPageService from "../../components/servicesPageModulable/mainPageService/MainPageService";
import Footer from "../../components/footer/Footer";

export default function Ventilation() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} />
      </header>
      <main>
        <MainPageService title={"Ventilation"} imgMain={"/ventilation2.jpg"} />
      </main>
      <Footer />
    </div>
  );
}
