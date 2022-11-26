import "../styles/globals.css";
import React from "react";
import ServicePageModulable from "../components/servicesPageModulable/ServicePageModulable";
import imgBanner from "../public/chaudiere.jpg";

export default function Chauffage() {
  return (
    <>
      <ServicePageModulable imgBanner={imgBanner} />
    </>
  );
}
