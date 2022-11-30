import imgBanner from "/public/chaudiere.jpg";
import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../../components/footer/Footer";
import Link from "next/link";

export default function ChauffagePage() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title={"Chauffage"} />
      </header>
      <main>
        <MainPageService
          title={"Installation de chaudière et système de chauffage"}
        >
          <ImageAndContentCustom
            title={"chauffage"}
            imgContent={"/chauffage.png"}
          >
            <p>
              Que votre projet soit une nouvelle construction, une rénovation,
              une maison unifamiliale ou un bâtiment de plus grande envergure,
              nous assurons les installations entretiens et réparations de :
            </p>
            <p>
              L'entreprise KD Energie se fera un plaisir de vous accompagnez et
              vous orientez pour vos projets de :
            </p>
            <p>- Dépannage chaudière</p>
            <p>- Rénovation et l'entretiens chaudières</p>
            <p>- Radiateur traditionnels et design</p>
            <p>- Chauffage par le sol</p>
            <p>- Chauffe-eau et boiler</p>
            <p>- Tubage / Ramonage de cheminée</p>
            <p>- Chaudière condensation (mazout, gaz) </p>
            <p>
              Pour tout renseignement ou demande de devis n'hésitez pas à{" "}
              <Link
                href={"contact"}
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
