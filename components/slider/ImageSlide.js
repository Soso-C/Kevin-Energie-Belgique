import Image from "next/image";
import React from "react";

export default function ImageSlide({ slide, id, image, index }) {
  return (
    <div
      key={id}
      className={`${
        slide.index === index + 1 ? "opacity-100" : "opacity-0"
      } w-full h-full transition-opacity duration-700 ease-in-out absolute`}
    >
      <Image
        src={image}
        alt={`img ${index}`}
        objectFit="cover"
        fill
        quality={100}
      />
    </div>
  );
}
