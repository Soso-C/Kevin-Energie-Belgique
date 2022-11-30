import React from "react";
import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";

export default function page() {
  return (
    <>
      <TopBarHeader />
      <Navbar />
      <div className="max-w-[1400px] mx-auto mt-[70px] lg:mt-[120px]">
        <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-orange-500 text-center py-10">
          Nos réalisations
        </h1>
      </div>
    </>
  );
}
