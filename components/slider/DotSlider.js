import React from "react";

export default function DotSlider({ slide, index, moveDot }) {
  return (
    <button
      key={index}
      className={`${
        slide.index === index + 1 ? "bg-black/70" : "bg-transparent"
      } w-5 h-5 rounded-[50%] border-white border-2 `}
      onClick={() => moveDot(index + 1)}
    ></button>
  );
}
