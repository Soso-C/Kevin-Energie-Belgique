"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import useToastify from "./useToastify";

export default function useEmail() {
  const { alertMsg, errAlert } = useToastify();
  const [showCaptcha, setShowCaptcha] = useState(true);

  const sendEmail = (formRef) => {
    const params = formRef.current;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        params,
        process.env.NEXT_PUBLIC_EMAIL_JS_KEY
      )
      .then(
        (result) => {
          alertMsg();
          formRef.current.reset();
          setShowCaptcha(false);
        },
        (error) => {
          errAlert();
        }
      );
  };
  return { sendEmail, showCaptcha };
}
