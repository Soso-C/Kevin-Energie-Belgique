"use client";
import { useState } from "react";
import { imgSlider } from "../components/slider/imgSliderData";

export default function useSlider() {
  const [slide, setSlide] = useState({
    index: 1,
    inProgress: false,
  });

  // Move to nextSlide
  const nextSlide = () => {
    if (slide.index !== imgSlider.length && !slide.inProgress) {
      setSlide({ index: slide.index + 1, inProgress: true });

      setTimeout(() => {
        setSlide({ index: slide.index + 1, inProgress: false });
      }, 400);
    } else if (slide.index === imgSlider.length && !slide.inProgress) {
      setSlide({ index: 1, inProgress: true });
      setTimeout(() => {
        setSlide({ index: 1, inProgress: false });
      }, 400);
    }
  };
  // Move to prevSlide
  const prevSlide = () => {
    if (slide.index !== 1 && !slide.inProgress) {
      setSlide({ index: slide.index - 1, inProgress: true });
      setTimeout(() => {
        setSlide({ index: slide.index - 1, inProgress: false });
      }, 400);
    } else if (slide.index === 1 && !slide.inProgress) {
      setSlide({ index: imgSlider.length, inProgress: true });
      setTimeout(() => {
        setSlide({ index: imgSlider.length, inProgress: false });
      }, 400);
    }
  };

  // Move to index by dot
  const moveDot = (index) => {
    setSlide({ index: index, inProgress: false });
  };
  return { slide, setSlide, moveDot, nextSlide, prevSlide };
}
