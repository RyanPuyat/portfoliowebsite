import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8ra5tzk', 'template_2znm1rl', form.current, {
        publicKey: 'brXApN2LXw5h6QN8f',
      })
      .then(
        () => {
          setShowMessage(true);
          form.current.reset();
          setTimeout(() => setShowMessage(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="relative py-5">
      {showMessage && (
        <div className="absolute text-center top-0 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white p-4 rounded-md shadow-lg z-50 transition-opacity duration-300">
          Email Sent Successfully!
        </div>
      )}
      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <div className="flex items-center border-2 border-neutral-300 rounded-2xl h-12 p-2 text-sm">
          <FaUser className="text-neutral-500 mr-2 bg-transparent" />
          <input
            className="flex-grow outline-none"
            name="from_name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="flex items-center border-2 border-neutral-300 rounded-2xl h-12 p-2 text-sm">
          <FaEnvelope className="text-neutral-500 mr-2 bg-transparent" />
          <input
            className="flex-grow outline-none "
            name="from_email"
            type="email"
            placeholder="example@sample.com"
            required
          />
        </div>
        <textarea
          className="border-2 border-neutral-300 rounded-2xl p-2 text-sm"
          name="message"
          type="text"
          placeholder="Message"
          rows={9}
          cols={50}
          required
        ></textarea>

        <div className="gradient-border">
          <button
            className="button-submit bg-gradient-to-r from-[#3e1f90] to-[#2c1468] hover:from-[#2c1468] hover:to-[#3e1f90] text-white font-bold py-2 px-4 rounded-2xl transition-colors duration-300 border-1 border-neutral-400 shadow-neutral-700 hover:shadow-lg hover:shadow-[#3e1f90]/60 cursor-pointer glow-effect"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
