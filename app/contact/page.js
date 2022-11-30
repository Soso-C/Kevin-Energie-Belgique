import React from "react";
import ContactForm from "../../components/form/ContactForm";
import Navbar from "../../components/header/navbar/Navbar";
import TopBarHeader from "../../components/header/topbarheader/TopBarHeader";

export default function Contact() {
  return (
    <>
      <TopBarHeader />
      <Navbar />
      <ContactForm />
    </>
  );
}
