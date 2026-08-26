import ContactRight from './ContactRight';
import ContactLeft from './ContactLeft';

function ContactDetails() {
  return (
    <div className="max-w-[1300px] bg-[var(--sig-panel)] backdrop-blur border border-[var(--sig-line)] mx-auto px-6 py-8">
      <h2 className="font-mono text-sm text-[var(--sig-amber)] mb-8 text-center">
        [ CONNECT WITH ME ]
      </h2>
      <div className="flex flex-col lg:flex-row p-4 justify-between mx-2 gap-6 lg:gap-15">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
}
export default ContactDetails;
