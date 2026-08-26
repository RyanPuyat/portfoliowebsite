import { FaUser, FaEnvelope } from 'react-icons/fa';
import { useEmailForm } from '../hooks/useEmailForm';
import { useState } from 'react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmmiting] = useState(false);
  const { formRef, sendEmail } = useEmailForm(setIsSubmmiting);

  return (
    <div className="py-5 w-auto font-jbmono text-sm">
      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex items-center border border-[var(--ide-line)] bg-[#1E1E1E] h-12 p-2 focus-within:border-[var(--ide-type)]">
          <FaUser className="text-[var(--ide-muted)] mr-2" />
          <input
            className="flex-grow outline-none bg-transparent text-[var(--ide-text)] placeholder:text-[var(--ide-muted)]"
            name="from_name"
            type="text"
            placeholder="> Your name"
            required
          />
        </div>

        <div className="flex items-center border border-[var(--ide-line)] bg-[#1E1E1E] h-12 p-2 focus-within:border-[var(--ide-type)]">
          <FaEnvelope className="text-[var(--ide-muted)] mr-2" />
          <input
            className="flex-grow outline-none bg-transparent text-[var(--ide-text)] placeholder:text-[var(--ide-muted)]"
            name="from_email"
            type="email"
            placeholder="> Your email"
            required
          />
        </div>

        <textarea
          className="border border-[var(--ide-line)] bg-[#1E1E1E] text-[var(--ide-text)] placeholder:text-[var(--ide-muted)] p-2 outline-none focus:border-[var(--ide-type)]"
          name="message"
          placeholder="> Message"
          rows={9}
          required
        ></textarea>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-3 py-2 bg-[#2A2D2E] border border-[var(--ide-line)] text-[var(--ide-type)] hover:border-[var(--ide-type)] transition-colors"
        >
          {isSubmitting ? '$ sending...' : '▶ Run — Send message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
