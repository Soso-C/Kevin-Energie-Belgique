/* eslint-disable react/no-unescaped-entities */
import Banner from "/components/header/banner/Banner";
import MainPageService from "/components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "/components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import Footer from "../components/footer/Footer";
import imgBanner from "/public/bannerAndSlider/pellet.jpg";
import imgMain from "/public/bannerAndSlider/pellet2.png";
import Link from "next/link";
import Head from "next/head";

export default function PelletPage() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>KD Energie | Pellets</title>
      </Head>
      <header>
        <Banner imgBanner={imgBanner} title={"Pellets"} />
      </header>
      <main>
        <MainPageService title={"Poêle à pellets"}>
          <ImageAndContentCustom title={"Pellets"} imgContent={imgMain}>
            <p>
              Vous n’êtes pas complètement satisfaits de la température qui
              règne dans votre pièce à vivre ? Vous souhaitez une solution plus
              économique mais aussi plus écologique pour chauffer votre
              habitation ? Vous aimeriez une solution facile et élégante pour
              disposer d’une source de chaleur supplémentaire ?
            </p>
            <p>
              Notre entreprise est la pour y remédiez. Au-delà de ses aspects
              écologiques et économiques, ce type de chauffage apporte une
              ambiance chaleureuse et conviviale à votre maison.
            </p>
            <p>
              Située à Aywaille, KD Energie vous propose ce service
              d’installation de poêle à pellets dans la province de Liège.
            </p>
            <p>
              Vous êtes intéressés par ce service et voulez en savoir plus quant
              à celui-ci ? N’hésitez pas à nous contacter. Nous mettons un point
              d’honneur à répondre très rapidement à la moindre de vos questions
              et ce, en étant le plus précis possible.
            </p>
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
