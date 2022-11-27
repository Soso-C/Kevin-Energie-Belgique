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
            icon={<FaHome className="h-8 w-8" />}
            href="/sanitaire"
            title="Sanitaire"
            img={"/sanitaire.jpg"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, commodi!"
          />
          <SectionItem
            icon={<IoFlame className="h-8 w-8" />}
            href={"/chauffage"}
            title="Chauffage"
            img={"/chaudiere.jpg"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, commodi!"
          />
          <SectionItem
            icon={<IoFlame className="h-8 w-8" />}
            href="/pellet"
            title="Pellets"
            img={"/pellet.jpg"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, commodi!"
          />
          <SectionItem
            icon={<IoFlame className="h-8 w-8" />}
            href="/pompe-a-chaleur"
            title="Pompe à chaleur"
            img={"/pompe_a_chaleur.png"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, commodi!"
          />
          <SectionItem
            icon={<TbWindmill className="h-8 w-8" />}
            href="/ventilation"
            title="Ventilation"
            img={"/ventilation.jpg"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, commodi!"
          />
          <SectionItem
            icon={<BsTools className="h-8 w-8" />}
            href="/entretien-depanage"
            title="Entretien / Dépanage"
            img={"/entretien.jpg"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, commodi!"
          />
        </div>
      </div>
    </section>
  );
}
