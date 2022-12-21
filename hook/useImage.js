import React, { useState, useEffect } from "react";

export default function useImage() {
  const imagePerRow = 8;
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/images";

  const [images, setImages] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  const [next, setNext] = useState(imagePerRow);

  useEffect(() => {
    getImages();
  }, []);

  //Fetch all img
  async function getImages() {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      });
  }

  // Add newRow for "array slice"
  const handleMoreImage = () => {
    if (next > images.length) {
      return;
    }
    setNext(next + imagePerRow);
  };

  return { handleMoreImage, images, setImages, next };
}
