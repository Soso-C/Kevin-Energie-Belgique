import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ImageSlide({ slide, id, image, index, title }) {
  return (
    <div
      className={`${
        slide.index === index + 1 ? "opacity-100" : "opacity-0"
      } w-full h-full transition-opacity duration-700 ease-in-out absolute`}
    >
      <Image
        src={image}
        alt={`img ${index}`}
        fill
        sizes="100vw"
        priority={true}
        className="object-cover h-full w-full"
      />
      {/* 2nd partie */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[4] " />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 text-white z-[5]">
        <div className="flex flex-col items-center justify-center">
          <h2
            className={`${
              slide.index === index + 1 ? "opacity-100" : "opacity-0"
            } text-xl md:text-4xl text-center uppercase font-extrabold transition-opacity duration-700 ease-in-out`}
          >
            {title}
          </h2>
          <button className="w-fit px-4 py-2 bg-orange-500 rounded-full font-bold mt-8 hover:text-black">
            <Link
              href={
                slide.index === 1
                  ? "/pellet"
                  : slide.index === 2
                  ? "/pompe-a-chaleur"
                  : slide.index === 3
                  ? "/chauffage"
                  : slide.index === 4
                  ? "/sanitaire"
                  : slide.index === 5
                  ? "/ventilation"
                  : slide.index === 6
                  ? "/entretien-depannage"
                  : null
              }
            >
              Découvrir
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
