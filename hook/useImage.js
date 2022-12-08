import React, { useState, useEffect } from "react";

export default function useImage() {
  const imagePerRow = 8;
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [next, setNext] = useState(imagePerRow);

  useEffect(() => {
    setLoading(true);
    getImages();
  }, []);

  //Fetch all img
  async function getImages() {
    const url = "https://www.kd-energie.be/realisations/realisations.php";
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let arr = [];
        data.forEach((image) => {
          arr.push(image);
        });
        setImages([...arr]);
        setLoading(false);
      });
  }

  // Add newRow for "array slice"
  const handleMoreImage = () => {
    if (next > images.length) {
      return;
    }
    setNext(next + imagePerRow);
  };

  return { getImages, handleMoreImage, images, next, isLoading };
}
