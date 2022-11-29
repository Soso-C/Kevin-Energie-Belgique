import React from "react";
import Navbar from "../components/header/navbar/Navbar";
import TopBarHeader from "../components/header/topbarheader/TopBarHeader";
import Slider from "../components/slider/Slider";

export default function Header() {
  return (
    <header>
      <TopBarHeader />
      <Navbar />
      <Slider />
    </header>
  );
}
