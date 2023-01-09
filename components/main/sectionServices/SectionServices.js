import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoFlame } from "react-icons/io5";
import { TbWindmill } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import SectionItem from "./SectionItem";

export default function SectionServices() {
  return (
    <section className="bg-white py-10 lg:py-16 shadow">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-center text-2xl font-bold">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center gap-6 px-4 mt-16">
          <SectionItem
            icon={<IoFlame className="h-8 w-8" />}
            href={"/chauffage"}
            title="Chauffage"
            img={"/bannerAndSlider/chaudiere.jpg"}
            text="Installation et rénovation de chaudières (mazout, gaz), radiateur, chauffage sol, ..."
          />
          <SectionItem
            icon={<FaHome className="h-8 w-8" />}
            href="/sanitaire"
            title="Sanitaire"
            img={"/bannerAndSlider/sanitaire.jpg"}
            text="Installation et rénovation de boiler, salle de bain, évier, robinetterie, WC, ..."
          />
          <SectionItem
            icon={<TbWindmill className="h-8 w-8" />}
            href="/ventilation"
            title="Ventilation"
            img={"/bannerAndSlider/ventilation.jpg"}
            text="Installation et rénovation de ventilation à simple ou double flux."
          />
          <SectionItem
            icon={<IoFlame className="h-8 w-8" />}
            href="/pompe-a-chaleur"
            title="Pompe à chaleur"
            img={"/bannerAndSlider/pompe_a_chaleur.png"}
            text="Installation et rénovation de pompe à chaleur (air-eau, split, monobloc), ..."
          />
          <SectionItem
            icon={<IoFlame className="h-8 w-8" />}
            href="/pellet"
            title="Pellets"
            img={"/bannerAndSlider/pellet.jpg"}
            text="Installation et rénovation de poêle à pellets, tubage de cheminée, ..."
          />
          <SectionItem
            icon={<BsTools className="h-8 w-8" />}
            href="/entretien-depannage"
            title="Entretien / Dépanage"
            img={"/bannerAndSlider/entretien.jpg"}
            text="Entretien et dépannage de chaudière, sanitaire, ventilation, poêle, ramonage, ..."
          />
        </div>
      </div>
    </section>
  );
}
