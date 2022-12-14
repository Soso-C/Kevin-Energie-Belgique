/* eslint-disable react/no-unescaped-entities */
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../components/footer/Footer";
import Link from "next/link";
import imgBanner from "/public/bannerAndSlider/chaudiere.jpg";
import imgMain from "/public/bannerAndSlider/chauffage.png";
import Head from "next/head";

export default function ChauffagePage() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>KD Energie | Chauffage</title>
      </Head>
      <header>
        <Banner imgBanner={imgBanner} title={"Chauffage"} />
      </header>
      <main>
        <MainPageService
          title={"Installation de chaudière et système de chauffage"}
        >
          <ImageAndContentCustom title={"chauffage"} imgContent={imgMain}>
            <p>
              Que votre projet soit une nouvelle construction, une rénovation,
              une maison unifamiliale ou un bâtiment de plus grande envergure,
              nous assurons les installations entretiens et réparations de :
            </p>
            <p>
              L'entreprise KD Energie se fera un plaisir de vous accompagnez et
              vous orientez pour vos projets de :
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>Dépannage chaudière</li>
              <li>Rénovation et l'entretiens chaudières</li>
              <li>Radiateur traditionnels et design</li>
              <li>Chauffage par le sol</li>
              <li>Chauffe-eau et boiler</li>
              <li>Tubage / Ramonage de cheminée</li>
              <li>Chaudière condensation (mazout, gaz) </li>
            </ul>
            <p>
              Pour tout renseignement ou demande de devis n'hésitez pas à{" "}
              <Link
                href={"/contact"}
                className="text-orange-500 underline font-medium"
              >
                nous contacter.
              </Link>
            </p>
            <p>KD Energie se fera un plaisir d'y répondre.</p>
          </ImageAndContentCustom>
        </MainPageService>
      </main>
      <Footer />
    </div>
  );
}
