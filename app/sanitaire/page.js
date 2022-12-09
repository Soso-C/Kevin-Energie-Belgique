import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../../components/footer/Footer";
import imgBanner from "/public/sanitaire.jpg";
import imgMain from "/public/sanitaire2.png";
import Link from "next/link";

export default function SanitairePage() {
  return (
    <div className="bg-gray-50">
      <header>
        <TopBarHeader />
        <Navbar />
        <Banner imgBanner={imgBanner} title={"Sanitaire"} />
      </header>
      <main>
        <MainPageService title={"Sanitaire"}>
          <ImageAndContentCustom title={"Sanitaire"} imgContent={imgMain}>
            <p>
              Vous êtes à la recherche d’un professionnel expérimenté pour la
              mise en œuvre de vos travaux sanitaires ?
            </p>
            <p>
              L'entreprise KD Energie se fera un plaisir de vous accompagnez et
              vous orientez pour vos projets de :
            </p>
            <p>- Travaux de plomberie</p>
            <p>- Installation de boiler et chauffe-eau</p>
            <p>- Installation de salle de bain</p>
            <p>- Système d'adoucissement d'eau</p>
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
