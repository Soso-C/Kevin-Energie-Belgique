"use client";
import ImageGallery from "./ImageGallery";
import { FaSpinner } from "react-icons/fa";
import useImage from "../../hook/useImage";

export default function Gallery() {
  const { getImages, handleMoreImage, images, next, isLoading } = useImage();

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] relative">
        <h1 className="text-center text-xl font-bold py-4">
          Chargement des images
        </h1>
        <FaSpinner className="animate-spin h-20 w-20" />
      </div>
    );
  if (!images)
    return (
      <p className="h-[50vh] text-center text-xl text-red-600">
        {"Aucune images n'a pu être trouvée veuillez réssayer ultérieurement."}
      </p>
    );

  return (
    <>
      <div
        className={`md:my-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 place-items-center`}
      >
        {/* Display images per row */}
        {images &&
          images.slice(0, next).map((image) => {
            return <ImageGallery key={image.id} {...image} />;
          })}
      </div>
      {/* Button view more */}
      <div className="flex items-center justify-center py-4">
        <button
          disabled={images.length > next ? false : true}
          className="bg-orange-500 text-white py-2 px-4 rounded-full hover:text-black disabled:opacity-70 disabled:hover:text-white"
          onClick={handleMoreImage}
        >
          Voir plus
        </button>
      </div>
    </>
  );
}
