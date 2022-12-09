import Image from "next/image";
import Link from "next/link";
import React from "react";
import OrangeBtn from "../../button/orangeButton/OrangeBtn";

export default function SectionItem({ icon, title, text, href = "#", img }) {
  return (
    <div className="flex flex-col items-center space-y-4 p-5 rounded-lg shadow text-gray-500">
      <div className="flex flex-col items-center text-orange-500">
        <span>{icon}</span>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-center">{text}</p>
      <div className="relative h-[180px] w-full">
        <Image
          src={img}
          className="object-cover"
          fill
          alt="image"
          sizes="100vh"
        />
      </div>
      <Link href={href}>
        <OrangeBtn>{`Plus d'information`}</OrangeBtn>
      </Link>
    </div>
  );
}
