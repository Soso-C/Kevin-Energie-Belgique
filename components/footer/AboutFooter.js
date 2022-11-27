import React from "react";

export default function AboutFooter() {
  return (
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
  );
}
