import Link from "next/link";
import React from "react";
import Logo from "../logo/Logo";
import OrangeBtn from "../button/orangeButton/OrangeBtn";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-[#464646]">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid grid-cols-1 sm:text-center md:grid-cols-2 lg:grid-cols-4 text-white gap-8">
          <div className="text-center">
            <span className="text-lg  font-bold">A propos</span>
            <p className="text-justify text-sm pt-5">
              {`KD Énergie située à Aywaille et ses alentours est une jeune
              entreprise spécialisée vous proposant ses services d'installation,
              dépannage et d'entretiens chauffage, sanitaire, ventilation
              (simple - double flux), pompe à chaleur et tous systèmes de
              chaudière à condensation gaz et mazout.`}
            </p>
          </div>
          <div className="text-center">
            <span className="text-lg font-bold text-center">Services</span>

            <nav
              aria-label="Footer Services Nav"
              className="mt-8 flex flex-col items-center"
            >
              <ul className="space-y-1 text-sm font-medium underline">
                <li>
                  <Link className="hover:text-orange-500" href="/chauffage">
                    Chauffage
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-orange-500" href="/ventilation">
                    Sanitaire
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-orange-500"
                    href="/pompe-a-chaleur"
                  >
                    Ventilation
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-orange-500" href="/pellet">
                    Pompe à Chaleur
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-orange-500"
                    href="/entretien-depanage"
                  >
                    Pellets
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-orange-500"
                    href="/entretien-depanage"
                  >
                    Entretiens-Dépannage
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full mx-auto flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1860430540673!2d5.65089511589629!3d50.456260194827166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c05c017061ff2d%3A0xb6cf7199910cd2f4!2sRue%20Saint-Roch%2042%2C%204920%20Aywaille%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1669504564708!5m2!1sfr!2sfr"
              width="300"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center flex flex-col items-center">
            <p className="text-lg font-bold text-center">Contactez nous</p>
            <ul className="mt-8 space-y-2 text-sm font-medium">
              <li>
                <Link
                  className="hover:text-orange-500"
                  href="mailto:contact@kd-energie.be"
                >
                  <span className="">contact@kd-energie.be</span>
                </Link>
              </li>

              <li>
                <Link className="hover:text-orange-500" href="tel:0468381079">
                  <span className="">0468381079</span>
                </Link>
              </li>

              <li className="pb-4">
                <address className="not-italic">
                  Rue Saint-Roch 42, 4920 Aywaille, Belgique
                </address>
              </li>

              <OrangeBtn>Devis gratuit</OrangeBtn>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
