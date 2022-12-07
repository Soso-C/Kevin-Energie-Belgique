import Image from "next/image";
import React from "react";
import ImageComponent from "./ImageComponent";

export default function ImageAndContentCustom({ imgContent, title, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6 md:mt-6 lg:mt-12">
      <ImageComponent title={title} imgContent={imgContent} />
      <div
        className={`sm:text-sm md:text-base text-justify font-medium py-4 space-y-3 text-gray-700`}
      >
        {children}
      </div>
    </div>
  );
}
