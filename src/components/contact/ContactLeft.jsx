import ContactForm from './ContactForm';

const ContactLeft = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mb-4">Get in touch</h2>
        <p className="text-neutral-400 text-sm">
          Interested in a collaboration or have queries? <br />
          Feel free to drop a message!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactLeft;
