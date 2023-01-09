/* eslint-disable react/no-unescaped-entities */
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../components/footer/Footer";
import imgBanner from "/public/bannerAndSlider/entretien.jpg";
import Link from "next/link";
import imgMain from "/public/bannerAndSlider/entretien2.png";
import Head from "next/head";

export default function EntretienPage() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>KD Energie | Entretien et dépannage</title>
      </Head>
      <header>
        <Banner imgBanner={imgBanner} title={"Entretien & Dépannage"} />
      </header>
      <main>
        <MainPageService title={"Entretien d'installation et dépannage"}>
          <ImageAndContentCustom title={"Entretien"} imgContent={imgMain}>
            <p>
              KD Energie vous propose ses services pour l'entretien et le
              dépannage de vos systèmes.
            </p>
            <p>
              Que ce soit pour la plomberie ou le chauffage, les équipements
              souffrent : eau trop calcaire ou trop acide, résidus de combustion
              pour les chaudières etc…
            </p>
            <ul className="list-inside list-disc">
              <li>Dépannage en urgence.</li>
              <li>
                Placement de systèmes de traitement de l'eau et adoucisseurs
              </li>
              <li>Intervention sur le réseau chauffage et sanitaire</li>

              <li>
                Entretien de chaudière / pompe à chaleur / boiler / chauffe-eau
                / poêle à pellets / insert / cassette
              </li>

              <li>
                Ramonage poêle à pellets / insert / cassette / feu ouvert /
                conduit chaudière
              </li>
              <li>
                Régulation de la pression du circuit de chauffage des radiateurs
              </li>
              <li>Réparation chauffe eau en panne.</li>
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
