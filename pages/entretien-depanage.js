import "../styles/globals.css";
import React from "react";
import ServicePageModulable from "../components/servicesPageModulable/ServicePageModulable";
import imgBanner from "../public/entretien.jpg";
import Head from "next/head";
import TopBarHeader from "../components/header/topbarheader/TopBarHeader";
import Navbar from "../components/header/navbar/Navbar";
import Banner from "../components/servicesPageModulable/banner/Banner";
import MainPageService from "../components/servicesPageModulable/mainPageService/MainPageService";
import Footer from "../components/footer/Footer";

export default function EntretienDepanage() {
  return (
    <>
      <div className="bg-gray-50">
        <Head>
          <title>KD Energie | Entretient et dépanage</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <TopBarHeader />
          <Navbar />
          <Banner imgBanner={imgBanner} title="Entretient et dépanage" />
        </header>
        <main>
          <MainPageService
            title={"Entretient et dépanage"}
            imgMain={"/entretien2.png"}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
