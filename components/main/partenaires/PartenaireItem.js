import Image from "next/image";
import React from "react";

export default function PartenaireItem({ img }) {
  return (
    <div className="relative overflow-hidden h-[125px] w-full">
      <Image src={img} objectFit="contain" fill alt="logo" />
    </div>
  );
}
