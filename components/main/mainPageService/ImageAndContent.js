import Image from "next/image";
import React from "react";

export default function ImageAndContent({ imgContent, content, title }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 mt-12">
      <div className={`h-full w-full relative`}>
        <Image
          src={imgContent}
          alt={`photo de ${title}`}
          layout="fill"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`flex flex-col items-center justify-center sm:text-sm md:text-base text-justify font-medium py-4 sm:leading-normal md:leading-relaxed`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex velit
        facilis aspernatur rerum optio nostrum hic voluptates necessitatibus
        ratione laboriosam natus, ea minus! Odit praesentium cumque expedita.
        Voluptates, dolores voluptatum! Suscipit, adipisci voluptates nostrum
        cum rem voluptatem veritatis? Deleniti iure, distinctio eius nulla
        corrupti veritatis temporibus possimus, tempora sint ea porro corporis
        cupiditate placeat similique nostrum ullam molestias soluta numquam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex velit
        facilis aspernatur rerum optio nostrum hic voluptates necessitatibus
        ratione laboriosam natus, ea minus! Odit praesentium cumque expedita.
        Voluptates, dolores voluptatum! Suscipit, adipisci voluptates nostrum
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex velit
        facilis aspernatur rerum optio nostrum hic voluptates necessitatibus
        ratione laboriosam natus, ea minus! Odit praesentium cumque expedita.
        Voluptates, dolores voluptatum! Suscipit, adipisci voluptates nostrum
        cum rem voluptatem veritatis? Deleniti iure, distinctio eius nulla.
      </div>
    </div>
  );
}
