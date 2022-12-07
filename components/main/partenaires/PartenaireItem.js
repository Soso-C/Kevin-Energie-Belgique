import Image from "next/image";
import React from "react";

export default function PartenaireItem({ img }) {
  return (
    <div className="relative overflow-hidden h-[125px] w-full">
      <Image
        src={img}
        className="object-contain w-full h-full"
        fill
        sizes="100vw"
        alt="logo"
      />
    </div>
  );
}
