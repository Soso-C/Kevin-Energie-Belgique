"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ImageGallery({ src }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-full h-52 shadow-sm relative">
      <Image
        src={src}
        alt="photo"
        fill
        priority={true}
        sizes="100vh"
        className={`h-full w-full object-cover duration-350 ease-in-out group-hover:opacity-75 ${
          isLoading
            ? "scale-105 blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
