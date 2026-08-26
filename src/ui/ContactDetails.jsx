import ContactRight from './ContactRight';
import ContactLeft from './ContactLeft';

function ContactDetails() {
  return (
    <div className="max-w-[1300px] bg-[var(--ide-sidebar)] border border-[var(--ide-line)] mx-auto px-6 py-8">
      <div className="text-xs font-jbmono text-[var(--ide-muted)] mb-2">
        ~/contact.txt
      </div>
      <h2 className="font-jbmono text-xl text-[var(--ide-type)] mb-8 text-center">
        // Connect with me
      </h2>
      <div className="flex flex-col lg:flex-row p-4 justify-between mx-2 gap-6 lg:gap-15">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
}
export default ContactDetails;
