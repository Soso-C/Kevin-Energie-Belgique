import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-96 lg:h-[500px] w-full mt-[70px]">
      <Image src={"/pump.png"} objectFit="cover" layout="fill" alt="image" />
    </div>
  );
}
