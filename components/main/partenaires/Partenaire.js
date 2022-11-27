import Image from "next/image";
import React from "react";
import { partenaireData } from "./partenaireData";
import PartenaireItem from "./PartenaireItem";

export default function Partenaire() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold text-center py-6">Nos Partenaires</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 px-4 my-12">
          {partenaireData.map((p) => {
            return <PartenaireItem key={p.id} {...p} />;
          })}
        </div>
      </div>
    </section>
  );
}
