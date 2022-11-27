import "/styles/globals.css";
import React from "react";
import ServicePageModulable from "../../components/servicesPageModulable/ServicePageModulable";
import imgBanner from "/public/pellet.jpg";
import Head from "next/head";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/servicesPageModulable/banner/Banner";
import MainPageService from "../../components/servicesPageModulable/mainPageService/MainPageService";
import Footer from "../../components/footer/Footer";

export default function Pellet() {
  return (
    <>
      <div className="bg-gray-50">
        <Head>
          <title>KD Energie | Pellet</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
    </>
  );
}
