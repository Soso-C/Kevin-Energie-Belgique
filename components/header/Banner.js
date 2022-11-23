import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-96 w-full sm:mt-[50px] md:mt-0">
      <Image
        src={"/solarpanel.jpg"}
        objectFit="cover"
        layout="fill"
        alt="test"
      />
    </div>
  );
}
