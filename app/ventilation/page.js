import "/styles/globals.css";
import React from "react";
import ServicePageModulable from "../../components/servicesPageModulable/ServicePageModulable";
import imgBanner from "/public/ventilation.jpg";
import Head from "next/head";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/servicesPageModulable/banner/Banner";
import MainPageService from "../../components/servicesPageModulable/mainPageService/MainPageService";
import Footer from "../../components/footer/Footer";

export default function Ventilation() {
  return (
    <>
      <div className="bg-gray-50">
        <Head>
          <title>KD Energie | Ventilation</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <TopBarHeader />
          <Navbar />
          <Banner imgBanner={imgBanner} />
        </header>
        <main>
          <MainPageService
            title={"Ventilation"}
            imgMain={"/ventilation2.jpg"}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
