import imgBanner from "/public/chaudiere.jpg";
import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../../components/footer/Footer";
export default function Home() {
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
              L'entreprise <strong>KD Energie</strong> se fera un plaisir de
              vous accompagnez et vous orientez pour vos projets de :
            </p>
            <p className="font-bold">- Chaudière condensation (mazout, gaz) </p>
            <p className="font-bold">- Rénovation et l'entretiens chaudières</p>
            <p className="font-bold">- Dépannage chaudière</p>
            <p className="font-bold">- Radiateur traditionnels et design</p>
            <p className="font-bold">- Chauffage par le sol</p>
            <p className="font-bold">- Chauffe-eau et boiler</p>
            <p className="font-bold">- Tubage / Ramonage de cheminée</p>
          </ImageAndContentCustom>
        </MainPageService>
      </main>
      <Footer />
    </div>
  );
}
