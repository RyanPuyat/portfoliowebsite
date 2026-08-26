import { CONTACT } from '../utils/index';
import { MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className="my-2 flex flex-col items-center justify-center font-mono text-sm text-[var(--sig-text)]">
      <SingleInfo text={CONTACT.email} Image={MdOutlineMail} />
      <SingleInfo text={CONTACT.address} Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
