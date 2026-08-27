import { FaUser, FaEnvelope } from 'react-icons/fa';
import { useEmailForm } from '../hooks/useEmailForm';
import { useState } from 'react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmmiting] = useState(false);
  const { formRef, sendEmail } = useEmailForm(setIsSubmmiting);

  return (
    <div className="py-5 w-auto font-mono text-sm">
      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex items-center border border-[var(--sig-line)] bg-[var(--sig-bg)] h-12 p-2 focus-within:border-[var(--sig-green)]">
          <FaUser className="text-[var(--sig-muted)] mr-2" />
          <input
            className="flex-grow outline-none bg-transparent text-[var(--sig-text)] placeholder:text-[var(--sig-muted)]"
            name="from_name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
        <div className="flex items-center border border-[var(--sig-line)] bg-[var(--sig-bg)] h-12 p-2 focus-within:border-[var(--sig-green)]">
          <FaEnvelope className="text-[var(--sig-muted)] mr-2" />
          <input
            className="flex-grow outline-none bg-transparent text-[var(--sig-text)] placeholder:text-[var(--sig-muted)]"
            name="from_email"
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        <textarea
          className="border border-[var(--sig-line)] bg-[var(--sig-bg)] text-[var(--sig-text)] placeholder:text-[var(--sig-muted)] p-2 outline-none focus:border-[var(--sig-green)]"
          name="message"
          placeholder="Message"
          rows={9}
          required
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-3 py-2 bg-[var(--sig-panel)] border border-[var(--sig-line)] text-[var(--sig-green)] transition-all duration-200 hover:border-[var(--sig-green)] hover:shadow-[0_0_14px_var(--sig-green-dim)] active:scale-95"
        >
          {isSubmitting ? 'Sending...' : '[ SEND MESSAGE ]'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
