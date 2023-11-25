"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");
  console.log(message);
  console.log(senderEmail);

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Email invalide",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Message invalide",
    };
  }

  let data;
  try {
    console.log("sending email");
    data = await resend.emails.send({
      from: "Contact - Benchi-CHEN.com<onboarding@resend.dev>",
      to: "benchi.chen.bc@gmail.com",
      subject: "Message depuis le site internet",
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
