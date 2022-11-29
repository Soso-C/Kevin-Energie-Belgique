import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ImageSlide({ slide, id, image, index, title, href }) {
  return (
    <div
      className={`${
        slide.index === index + 1 ? "opacity-100" : "opacity-0"
      } w-full h-full transition-opacity duration-700 ease-in-out absolute`}
    >
      <Image src={image} alt={`img ${index}`} objectFit="cover" fill />
      {/* <div className="absolute top-[45%] left-1/2 -translate-x-1/2 text-white">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl uppercase font-bold">{title}</h2>
          <button className="w-fit px-4 py-2 bg-orange-500 rounded-full font-bold mt-8 hover:text-black">
            <Link href={href}>Découvrir</Link>
          </button>
        </div>
      </div> */}
    </div>
  );
}
