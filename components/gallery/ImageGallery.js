"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageModal from "./ImageModal";

export default function ImageGallery({ src, onclick }) {
  const [isLoading, setLoading] = useState(true);
  const [modalToggle, setModalToggle] = useState(false);

  // Open/close Modal
  const handleClickImage = () => {
    setModalToggle(!modalToggle);
    if (!modalToggle) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  return (
    <>
      {modalToggle && <ImageModal url={src} onclick={handleClickImage} />}
      <div className="w-full h-52 shadow-sm relative hover:scale-105 duration-300">
        <Image
          src={src}
          alt="photo réalisations"
          fill
          sizes="100vh"
          className={`h-full w-full object-cover duration-350 ease-in-out group-hover:opacity-75 cursor-pointer ${
            isLoading
              ? "scale-105 blur-xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
          onClick={handleClickImage}
        />
      </div>
    </>
  );
}
