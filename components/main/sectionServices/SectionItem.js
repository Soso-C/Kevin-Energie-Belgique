import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectionItem({ icon, title, text, href = "#", img }) {
  return (
    <div className="flex flex-col items-center space-y-4 p-5 rounded-lg shadow text-gray-500">
      <div className="flex flex-col items-center text-orange-500">
        <span>{icon}</span>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-center">{text}</p>
      <div className="relative h-[180px] w-full">
        <Image src={img} objectFit="cover" layout="fill" alt="image" />
      </div>
      <Link href={href}>
        <button className="px-4 py-2 bg-orange-500 font-medium w-44 text-white rounded hover:text-gray-500">
          {"Plus d'information"}
        </button>
      </Link>
    </div>
  );
}
