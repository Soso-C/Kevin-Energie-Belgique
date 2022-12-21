import Image from "next/image";
import React from "react";
import logo from "/public/logo-kd-energie/logo.png";

export default function Logo() {
  return <Image src={logo} alt="logo KD Energie" width={220} height={220} />;
}
