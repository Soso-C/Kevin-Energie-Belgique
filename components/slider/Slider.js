import { useState } from "react";
import { imgSlider } from "./imgSlider";
import BtnSlide from "./BtnSlide";
import Image from "next/image";
import useSlider from "../../hook/useSlider";
import ImageSlide from "./ImageSlide";

export default function Slider() {
  const { slide, moveDot, nextSlide, prevSlide } = useSlider();

  return (
    // Container slider
    <div className="w-full h-96 lg:h-[500px] overflow-hidden relative mt-[70px] md:mt-[120px]">
      {/* Img */}
      {imgSlider.map((img, index) => {
        return <ImageSlide key={img.id} slide={slide} index={index} {...img} />;
      })}
      <BtnSlide moveSlide={nextSlide} direction="next" />
      <BtnSlide moveSlide={prevSlide} direction="prev" />
      {/* Dot Container + dot */}
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex space-x-1">
        {Array.from({ length: imgSlider.length }).map((item, index) => {
          return (
            <button
              key={index}
              className={`${
                slide.index === index + 1 ? "bg-black/70" : "bg-transparent"
              } w-5 h-5 rounded-[50%] border-white border-2 `}
              onClick={() => moveDot(index + 1)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
