import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      src={"/test_site_1.png"}
      alt="logo KD Energie"
      width={200}
      height={200}
    />
  );
}
