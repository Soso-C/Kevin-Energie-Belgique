import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../../components/footer/Footer";
import imgBanner from "/public/pellet.jpg";
import imgMain from "/public/pellet2.png";
export default function Home() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title={"Pellets"} />
      </header>
      <main>
        <MainPageService title={"Chaudière à pellets"}>
          <ImageAndContentCustom title={"Pellets"} imgContent={imgMain}>
            <p>
              {`Nos habitations sont de mieux en mieux isolées mais cela implique
              une aération réduite, ce qui peut entraîner des problèmes
              d'humidité, moisissure, odeurs, vapeurs de cuisson, poussière ou
              encore rejet de CO2, les particules présentes autour de nous sont
              bien plus nombreuses qu’on ne pourrait le penser, surtout si votre
              maison est mal aérée. Donc disposer d’un air sain de manière
              constante au sein de votre habitation est primordial pour votre
              qualité de vie.`}
            </p>
            <p>
              C'est pourquoi <strong>KD Energie</strong> propose ses services
              d'installation de système de ventilation
            </p>
            <p>
              Selon le type de votre habitation, nous vous proposons un système
              simple flux ou double flux.
            </p>
            <p className="font-bold">Système ventilation simple flux :</p>
            <p>
              {`Conviens mieux pour les rénovations. L'air frais entre dans la
              maison par des grille placées dans les pièces de vie, et l'air
              vicié ressort automatiquement par cuisine, salle de bain et WC
              (pièces dites de service)`}
            </p>
            <p className="font-bold">Système ventilation double flux:</p>
            <p>
              Convient mieux pour les habitations individuelles. L’air de dehors
              entre dans la maison et est réchauffé par l’air vicié qui ressort.
              L’air qui rentre est donc réchauffé, et l’air sortant ayant
              transféré sa chaleur ressort frais. Ce système minimise les pertes
              d’énergie
            </p>
          </ImageAndContentCustom>
        </MainPageService>
      </main>
      <Footer />
    </div>
  );
}
