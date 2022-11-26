"use client";
import Head from "next/head";
import { useRouter } from "next/router";
import TopBarHeader from "../header/topbarheader/TopBarHeader";
import Navbar from "../header/navbar/Navbar";
import Banner from "../header/banner/Banner";
import Footer from "../footer/Footer";
import MainPageService from "./mainPageService/MainPageService";

export default function ServicePageModulable({ imgBanner }) {
  const router = useRouter();
  const routerPathname = router.pathname.replace("/", "");
  const titleChanged =
    routerPathname.charAt(0).toUpperCase() + routerPathname.slice(1);
  return (
    <div className="bg-gray-50">
      <Head>
        <title>KD Energie | {titleChanged}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} />
      </header>
      <main>
        <MainPageService />
      </main>
      <Footer />
    </div>
  );
}
