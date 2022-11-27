import Link from "next/link";
import React from "react";
import Logo from "../logo/Logo";
import OrangeBtn from "../button/orangeButton/OrangeBtn";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillFacebook,
  AiOutlineHome,
} from "react-icons/ai";
import { IoBusinessOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-[#464646]">
      <div className="mx-auto max-w-[1400px] px-4 pt-16 pb-6 lg:py-8">
        <div className="grid grid-cols-1 sm:text-center md:grid-cols-2 lg:grid-cols-4 text-white gap-8 md:gap-12 justify-items-center md:justify-between">
          <div className="w-full h-full">
            <span className="text-lg font-bold text-orange-500 block w-full text-left">
              A propos
            </span>
            <p className="sm:text-center md:text-justify text-sm pt-5 font-medium">
              {`KD Énergie située à Aywaille et ses alentours est une jeune
              entreprise spécialisée vous proposant ses services d'installation,
              dépannage et d'entretiens chauffage, sanitaire, ventilation
              (simple - double flux), pompe à chaleur et tous systèmes de
              chaudière à condensation gaz et mazout.`}
            </p>
          </div>
          <div className="w-full lg:w-fit">
            <span className="text-lg font-bold text-orange-500 block w-full text-left md:text-center lg:text-left">
              Services
            </span>

            <nav aria-label="Footer Services Nav" className="mt-8">
              <ul className="space-y-1 text-sm font-medium underline text-left md:text-center lg:text-left">
                <li>
                  <Link className="hover:text-orange-500" href="/chauffage">
                    Chauffage
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-orange-500" href="/sanitaire">
                    Sanitaire
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-orange-500" href="/ventilation">
                    Ventilation
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-orange-500"
                    href="/pompe-a-chaleur"
                  >
                    Pompe à Chaleur
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-orange-500" href="/pellet">
                    Pellets
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-orange-500"
                    href="/entretien-depannage"
                  >
                    Entretien et Dépannage
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full h-full overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1860430540673!2d5.65089511589629!3d50.456260194827166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c05c017061ff2d%3A0xb6cf7199910cd2f4!2sRue%20Saint-Roch%2042%2C%204920%20Aywaille%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1669504564708!5m2!1sfr!2sfr"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="google map kd-energie"
            ></iframe>
          </div>
          <div className="w-full lg:w-fit">
            <p className="text-lg font-bold text-left text-orange-500 block w-full md:text-center ">
              Contactez nous
            </p>
            <ul className="mt-8 space-y-2 text-sm font-medium text-left md:text-center ">
              <li>
                <Link
                  className="hover:text-orange-500 flex items-center md:justify-center gap-2 justify-start"
                  href="mailto:contact@kd-energie.be"
                >
                  <AiOutlineMail className="w-4 h-4" />
                  <span>contact@kd-energie.be</span>
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-orange-500 flex items-center md:justify-center gap-2 justify-start"
                  href="tel:0468381079"
                >
                  <AiOutlinePhone className="w-4 h-4" />
                  <span>0468381079</span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-orange-500 flex items-center md:justify-center gap-2 justify-start"
                  href="/"
                >
                  <AiFillFacebook className="w-4 h-4" />
                  <span>Facebook</span>
                </Link>
              </li>

              <li>
                <span className="flex items-center md:justify-center gap-2 justify-start">
                  <AiOutlineHome className="w-4 h-4" />
                  Rue Saint-Roch 42, 4920 Aywaille, Belgique
                </span>
              </li>
              <li className="pb-4">
                <span className="flex items-center md:justify-center gap-2 justify-start">
                  <IoBusinessOutline className="h-4 w-4" />
                  BE0790.667.586
                </span>
              </li>

              <OrangeBtn>Devis gratuit</OrangeBtn>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
