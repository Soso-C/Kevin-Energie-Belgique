/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Banner from "../components/header/banner/Banner";
import Footer from "../components/footer/Footer";
import MainPageService from "../components/main/mainPageService/MainPageService";
import ImageAndContentCustom from "../components/main/mainPageService/mainServiceContent/ImageAndContentCustom";
import imgBanner from "/public/pompe_a_chaleur.png";
import imgMain from "/public/pompe_a_chaleur2.png";
import Link from "next/link";

export default function PompeChaleur() {
  return (
    <div className="bg-gray-50">
      <header>
        <Banner imgBanner={imgBanner} title={"Pompe à chaleur"} />
      </header>
      <main>
        <MainPageService title={"Installation de pompe à chaleur"}>
          <ImageAndContentCustom title={"Pompe à chaleur"} imgContent={imgMain}>
            <p>
              Les pompes à chaleur font partie des dispositifs de chauffage les
              plus innovants et performants existant sur le marché en matière
              d’énergie verte.
            </p>
            <p>
              Plus économiques que les chaudières traditionnelles, les pompes à
              chaleur offrent une chaleur naturelle, agréable et confortable,
              des rendements supérieurs, réduisent les émissions de CO2, ont de
              faibles coûts d’installation et de consommation.
            </p>
            <p>
              La pompe à chaleur utilise l'énergie présentes dans l'air (énergie
              aérothermique), dans l'eau (énergie aquathermique) ou dans le sol
              (énergie géothermie) selon le type de pompe pour chauffer votre
              maison et votre eau.
            </p>
            <p>
              En plus de chauffer votre maison, ce système peut également vous
              aider à rafraichir votre maison en temps de grande chaleur ! En
              effet, celle-ci peut se transformer en climatiseur afin de
              diminuer la température de vos pièces en été appelé le « natural
              cooling ».
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
