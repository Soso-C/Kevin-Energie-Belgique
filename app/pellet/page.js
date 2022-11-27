import React from "react";
import imgBanner from "/public/pellet.jpg";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/header/banner/Banner";
import MainPageService from "../../components/servicesPageModulable/mainPageService/MainPageService";
import Footer from "../../components/footer/Footer";

export default function Pellet() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title="Pellet" />
      </header>
      <main>
        <MainPageService title={"Pellet"} imgMain={"/pellet2.png"} />
      </main>
      <Footer />
    </div>
  );
}
