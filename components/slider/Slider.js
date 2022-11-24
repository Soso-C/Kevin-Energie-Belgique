import { useState } from "react";
import { imgSlider } from "./imgSlider";
import BtnSlide from "./BtnSlide";
import Image from "next/image";

export default function Slider() {
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
      setSlide({ index: 4, inProgress: true });
      setTimeout(() => {
        setSlide({ index: 4, inProgress: false });
      }, 400);
    }
  };

  // Move to index by dot
  const moveDot = (index) => {
    setSlide({ index: index, inProgress: false });
  };

  return (
    // Container slider
    <div className="w-full h-96 lg:h-[500px] overflow-hidden relative mt-[70px] md:mt-[120px]">
      {/* Img */}
      {imgSlider.map((img, index) => {
        return (
          <div
            key={img.id}
            className={`${
              slide.index === index + 1 ? "opacity-100" : "opacity-0"
            } w-full h-full transition-opacity duration-700 ease-in-out absolute`}
          >
            <Image
              src={img.image}
              alt={`img ${index}`}
              objectFit="cover"
              layout="fill"
              quality={100}
            />
          </div>
        );
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
                slide.index === index + 1
                  ? "bg-orange-500/50"
                  : "bg-transparent"
              } w-5 h-5 rounded-[50%] border-white border-2 `}
              onClick={() => moveDot(index + 1)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
