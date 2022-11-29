import Image from "next/image";
import React from "react";

export default function MainPageService({ title, children }) {
  return (
    <section className="max-w-screen-xl mx-auto py-10 lg:py-16 px-4">
      <h2 className="text-center text-xl lg:text-3xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
