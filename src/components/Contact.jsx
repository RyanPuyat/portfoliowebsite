import ContactLeft from './contact/ContactLeft';
import ContactRight from './contact/ContactRight';

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-100px px-4"
    >
      <h2 className="my-10 text-center text-4xl">
        Connect with <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-24">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
};

export default Contact;
