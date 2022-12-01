import React from "react";
import emailjs from "@emailjs/browser";
import useToastify from "./useToastify";

export default function useEmail() {
  const { alertMsg } = useToastify();

  const sendEmail = (form, setCaptcha) => {
    const params = { ...form.current };
    console.log(params);
    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
    //     process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
    //     form.current,
    //     process.env.NEXT_PUBLIC_EMAIL_JS_KEY
    //   )
    //   .then(
    //     (result) => {
    //       console.log("Message envoyé avec succes", result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    alertMsg();
    setCaptcha((curr) => (curr = false));
    form.current.reset();
  };
  return { sendEmail };
}
