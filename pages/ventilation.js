import "../styles/globals.css";
import React from "react";
import ServicePageModulable from "../components/servicesPageModulable/ServicePageModulable";
import imgBanner from "../public/ventilation.jpg";

export default function Ventilation() {
  return (
    <>
      <ServicePageModulable imgBanner={imgBanner} />
    </>
  );
}
