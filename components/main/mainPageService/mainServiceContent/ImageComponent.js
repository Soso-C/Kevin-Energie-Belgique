import Image from "next/image";
import React from "react";

export default function ImageComponent({ imgContent, title }) {
  return (
    <div className={`h-full w-full relative`}>
      <Image
        src={imgContent}
        alt={`photo de ${title}`}
        layout="fill"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
