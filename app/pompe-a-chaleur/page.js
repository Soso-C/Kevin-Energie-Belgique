import React from "react";
import imgBanner from "/public/pompe_a_chaleur.png";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/header/banner/Banner";
import Footer from "../../components/footer/Footer";
import MainPageService from "../../components/main/mainPageService/MainPageService";

export default function PompeChaleur() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title={"Pompe à chaleur"} />
      </header>
      <main>
        <MainPageService
          title={"Pompe à chaleur"}
          imgMain={"/pompe_a_chaleur2.png"}
        />
      </main>
      <Footer />
    </div>
  );
}
