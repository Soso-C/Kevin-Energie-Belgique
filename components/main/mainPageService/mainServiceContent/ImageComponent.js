import Image from "next/image";
import React from "react";

export default function ImageComponent({ imgContent, title }) {
  return (
    <div className={`h-full w-full relative`}>
      <Image
        src={imgContent}
        alt={`image de ${title}`}
        fill
        className="w-full h-full object-cover"
      />
    </div>
  );
}
