import React from "react";
import imgBanner from "/public/entretien.jpg";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Navbar from "../../components/header/navbar/Navbar";
import Banner from "../../components/header/banner/Banner";
import Footer from "../../components/footer/Footer";
import MainPageService from "../../components/main/mainPageService/MainPageService";

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
