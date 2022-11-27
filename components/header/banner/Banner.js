import Image from "next/image";
import React from "react";

export default function Banner({ imgBanner, title }) {
  return (
    <div className="relative h-96 lg:h-[380px] w-full mt-[70px] md:mt-[120px]">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1] " />
      <Image
        src={imgBanner}
        alt="image"
        fill
        className="h-full w-full object-cover"
      />
      <div className="absolute z-[1] -translate-x-1/2 left-1/2 top-1/2">
        <h2 className="font-extrabold text-4xl uppercase text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}
