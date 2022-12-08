import Image from "next/image";
import React from "react";

export default function ImageModal({ url, onclick }) {
  return (
    <div
      className="z-50 fixed h-screen w-screen bg-black/80 top-0 left-0 right-0 bottom-0"
      onClick={onclick}
    >
      <div className="fixed w-full h-[80vh] top-20 -translate-x-1/2 left-1/2 z-[80] px-4">
        <div className="relative w-full h-full">
          <Image
            src={url}
            alt="photo réalisations"
            fill
            sizes="100vh"
            className={`h-full w-full object-contain`}
          />
        </div>
      </div>
    </div>
  );
}
