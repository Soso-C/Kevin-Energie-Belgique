import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../../components/footer/Footer";
import imgBanner from "/public/entretien.jpg";
import imgMain from "/public/entretien2.png";
import Link from "next/link";

export default function EntretienPage() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title={"Entretien & Dépannage"} />
      </header>
      <main>
        <MainPageService title={"Entretien d'installation et dépannage"}>
          <ImageAndContentCustom title={"Entretien"} imgContent={imgMain}>
            <p>
              KD Energie vous propose ses services pour l’entretien et le
              dépannage de vos systèmes.
            </p>
            <p>
              Que ce soit pour la plomberie ou le chauffage, les équipements
              souffrent : eau trop calcaire ou trop acide, résidus de combustion
              pour les chaudières etc…
            </p>
            <p>Nous intervenons de manière programmée à la demande.</p>
            <p className="font-bold">Dépannage en urgence.</p>
            <p className="font-bold">
              Placement de systèmes de traitement de l’eau et adoucisseurs.
            </p>
            <p className="font-bold">
              Intervention sur le réseau chauffage et sanitaire.
            </p>
            <p className="font-bold">
              Entretien de chaudière / pompe à chaleur / boiler / chauffe-eau /
              poêle à pellets / insert / cassette
            </p>
            {/* <p className="">Entretien pompe à chaleur</p>
            <p className="">Entretien boiler / chauffe-eau</p>
            <p className="">Entretiens Poêle à pellets/insert/cassette</p> */}
            {/* <p className="">Ramonage conduit chaudière</p> */}
            <p className="font-bold">
              Ramonage poêle à pellets / insert / cassette / feu ouvert /
              conduit chaudière
            </p>
            <p className="font-bold">
              Régulation de la pression du circuit de chauffage des radiateurs
            </p>
            <p className="font-bold">Réparation chauffe eau en panne.</p>
            <p>
              Alors, n'hésitez plus, contactez-nous pour prendre rendez-vous à
              votre meilleure convenance. Nous nous adaptons en fonction de
              votre emploi du temps, et nous vous garantissons une intervention
              dans les plus brefs délais.
            </p>
          </ImageAndContentCustom>
        </MainPageService>
      </main>
      <Footer />
    </div>
  );
}
