import ContactForm from './ContactForm';

function ContactLeft() {
  return (
    <div className="w-full max-w-md px-4 py-5">
      <p className="text-[var(--sig-muted)] text-sm font-mono">
        Interested in a collaboration or have queries? <br />
        Feel free to drop a message!
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactLeft;
