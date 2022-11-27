import Image from "next/image";
import React from "react";
import ImageAndContent from "./ImageAndContent";

export default function MainPageService({ imgMain, title, content }) {
  return (
    <section className="max-w-screen-xl mx-auto py-10 lg:py-16 px-4">
      <h2 className="text-center text-3xl font-bold ">{title}</h2>
      <ImageAndContent imgContent={imgMain} title={title} content={content} />
    </section>
  );
}
