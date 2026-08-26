import { FaEnvelope } from 'react-icons/fa';
import ContactInfo from './ContactInfo';
import Social from './Social';

const ContactRight = () => {
  return (
    <div className="flex flex-col items-center pt-15 px-5 justify-center gap-6 max-w-full overflow-hidden lg:pt-5">
      <div className="flex justify-center items-center border border-[var(--sig-line)] bg-[var(--sig-bg)] p-6">
        <FaEnvelope className="text-5xl text-[var(--sig-green)]" />
      </div>
      <ContactInfo />
      <Social />
    </div>
  );
};

export default ContactRight;
