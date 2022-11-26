import Image from "next/image";
import React from "react";
import ImageAndContent from "./ImageAndContent";

export default function MainPageService({
  imgMain1,
  imgMain2,
  title,
  content1,
  content2,
}) {
  return (
    <section className="max-w-[1400px] mx-auto">
      <h2 className="text-center text-3xl py-10">Nos chaudiere</h2>
      <ImageAndContent />
      <ImageAndContent inverse={true} />
    </section>
  );
}
