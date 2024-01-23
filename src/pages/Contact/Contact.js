import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wvxt3hg",
        "template_vcr6h6u",
        form.current,
        "3s3kga0URG0XmZSP5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          toast.success('Successfully submitted form');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
<div className=""></div>
  );
};

export default Contact;
