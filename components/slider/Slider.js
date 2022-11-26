"use client";
import { useState } from "react";
import { imgSlider } from "./imgSliderData";
import BtnSlide from "./BtnSlide";
import useSlider from "../../hook/useSlider";
import ImageSlide from "./ImageSlide";
import DotSlider from "./DotSlider";

export default function Slider() {
  const { slide, moveDot, nextSlide, prevSlide } = useSlider();

  return (
    <div className="w-full h-96 lg:h-[500px] overflow-hidden relative mt-[70px] md:mt-[120px]">
      {imgSlider.map((img, index) => {
        return <ImageSlide key={img.id} slide={slide} index={index} {...img} />;
      })}
      <BtnSlide moveSlide={nextSlide} direction="next" />
      <BtnSlide moveSlide={prevSlide} direction="prev" />
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex space-x-1">
        {Array.from({ length: imgSlider?.length }).map((item, index) => {
          return (
            <DotSlider
              key={index}
              slide={slide}
              moveDot={moveDot}
              index={index}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}
