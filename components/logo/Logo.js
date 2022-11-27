import Image from "next/image";
import React from "react";
export default function Logo() {
  return (
    <Image
      src={"/logo-kd-energie/logo.png"}
      alt="logo KD Energie"
      width={220}
      height={220}
    />
  );
}
