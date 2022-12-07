"use client";
import { useState } from "react";
import ImageGallery from "./ImageGallery";

export default function Gallery() {
  // Image per row
  const imagePerRow = 8;
  const [next, setNext] = useState(imagePerRow);

  // Update array slice image
  const handleMoreImage = () => {
    if (next > images.length) {
      return;
    }
    setNext(next + imagePerRow);
  };

  // Si l'array d'images est vide affiche un message d'erreur
  if (images.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-xl text-red-500 font-bold text-center">
          {
            "Aucune images n'a pu être trouvée veuillez réssayer ultérieurement."
          }
        </h1>
      </div>
    );
  }
  return (
    <>
      <div
        className={`md:my-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 place-items-center `}
      >
        {/* Display images per row */}
        {images &&
          images.slice(0, next).map((image) => {
            return <ImageGallery key={image.id} {...image} />;
          })}
      </div>
      <div className="flex items-center justify-center py-4">
        {/* {images.length >= next && ( */}
        <button
          disabled={images.length >= next ? false : true}
          className="bg-orange-500 text-white py-2 px-4 rounded-full hover:text-black disabled:opacity-70 disabled:hover:text-white"
          onClick={handleMoreImage}
        >
          Voir plus
        </button>
        {/* )} */}
      </div>
    </>
  );
}

const images = [
  {
    id: 1,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 2,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 3,
    name: "Image",
    src: "https://kd-energie.be/test/plombier.jpg",
  },
  {
    id: 4,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 5,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 6,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 7,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 8,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 9,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 10,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 11,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 12,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 13,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 14,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 15,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 16,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 17,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 18,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
  {
    id: 19,
    name: "Image",
    src: "https://kd-energie.be/test/beach.jpg",
  },
  {
    id: 20,
    name: "Image",
    src: "https://kd-energie.be/test/beach2.jpg",
  },
];
