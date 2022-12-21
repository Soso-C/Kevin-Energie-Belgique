import React from "react";
import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";

// import fs from "fs";

// const getImagesFolder = () => {
//   const folderName = "testfolder/";
//   const storeFiles = fs.readdirSync(folderName);
//   let arrayFiles = [];

//   storeFiles.forEach((file) => {
//     if (!file) return;
//     return arrayFiles.push({
//       src: "/" + folderName + file,
//       nom: file,
//     });
//   });
//   return arrayFiles;
// };

export default function page() {
  return (
    <div>
      <TopBarHeader />
      <Navbar />
      <div className="max-w-[1400px] mx-auto mt-[70px] md:mt-[120px] mb-10 px-4">
        <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-orange-500 text-center py-10">
          Nos réalisations
        </h1>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
