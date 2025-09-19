import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export function useEmailForm(setIsSubmitting) {
  const formRef = useRef(null);
  const service = import.meta.env.VITE_EMAIL_SERVICE;
  const template = import.meta.env.VITE_EMAIL_TEMPLATE;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(service, template, formRef.current, {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      })
      .then(() => {
        toast.success('Email Sent Successfully!');
        formRef.current?.reset();
      })
      .catch((error) => {
        toast.error('Failed to send email.');
        console.error('Email send failed:', error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return {
    formRef,
    sendEmail,
  };
}
