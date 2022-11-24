import Link from "next/link";
import React from "react";

export default function DevisGratuit() {
  return (
    <div className="flex justify-center items-center p-12 bg-white shadow-md">
      <Link href={"/contact"}>
        <h2 className="text-center text-2xl font-bold animate-pulse ">
          DEVIS GRATUIT
        </h2>
      </Link>
    </div>
  );
}
