const fs = require("fs").promises;

export default async function handler(req, res) {
  const folderName = "./public/realisations";
  const storeFiles = await fs.readdir(folderName);

  let arrayFiles = [];

  storeFiles.forEach((file) => {
    if (!file) return;
    return arrayFiles.push({
      src: "/realisations/" + file,
      nom: file,
    });
  });

  res.status(200).json({ images: arrayFiles });
}
