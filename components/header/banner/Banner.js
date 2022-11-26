import Image from "next/image";
import React from "react";

export default function Banner({ imgBanner }) {
  return (
    <div className="relative h-96 lg:h-[400px] w-full mt-[70px] md:mt-[120px]">
      <Image src={imgBanner} objectFit="cover" layout="fill" alt="image" />
    </div>
  );
}
