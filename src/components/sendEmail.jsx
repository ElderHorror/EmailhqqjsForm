import React from 'react'
import emailjs from '@emailjs/browser';

const SendEmail = (e, formData) => {
  e.preventDefault();

  const { jobOptions, expOptions, userDetails } = formData.options;

  const templateParams = {
    jobOptions,
    expOptions,
    userDetails,
  };

  emailjs
    .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
    .then((result) => {
      console.log(result.text);
    })
    .catch((error) => {
      console.log(error.text);
    });
};

export default SendEmail