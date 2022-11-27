import React from "react";
import ServicePageModulable from "../../components/servicesPageModulable/ServicePageModulable";
import imgBanner from "/public/entretien.jpg";
import Head from "next/head";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/servicesPageModulable/banner/Banner";
import MainPageService from "../../components/servicesPageModulable/mainPageService/MainPageService";
import Footer from "../../components/footer/Footer";

export default function EntretienDepanage() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title="Entretien et dépannage" />
      </header>
      <main>
        <MainPageService
          title={"Entretien et dépannage"}
          imgMain={"/entretien2.png"}
        />
      </main>
      <Footer />
    </div>
  );
}
