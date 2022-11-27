import React from "react";
import ServicePageModulable from "../../components/servicesPageModulable/ServicePageModulable";
import imgBanner from "/public/pompe_a_chaleur.png";
import Head from "next/head";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/servicesPageModulable/banner/Banner";
import MainPageService from "../../components/servicesPageModulable/mainPageService/MainPageService";
import Footer from "../../components/footer/Footer";

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
