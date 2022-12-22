import Head from "next/head";
import React from "react";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";

export default function page() {
  return (
    <div>
      <Head>
        <title>KD Energie | Réalisations</title>
      </Head>
      <div className="max-w-[1400px] mx-auto mt-[70px] md:mt-[120px] mb-10 px-4">
        <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-orange-500 text-center py-10">
          Nos réalisations
        </h1>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
