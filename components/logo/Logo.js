import Image from "next/image";
import React from "react";
export default function Logo() {
  return (
    <Image
      src={"/test_site_1.png"}
      alt="logo KD Energie"
      width={220}
      height={220}
      quality={100}
    />
  );
}
