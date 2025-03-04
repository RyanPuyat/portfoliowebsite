import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { SiFiverr } from 'react-icons/si';
import SocialInfo from './SocialInfo';
import ToolTip from '../tooltip/Tooltip';

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <ToolTip tooltip="LinkeIn">
        <SocialInfo link="#" Icon={FaLinkedinIn} />
      </ToolTip>
      <ToolTip tooltip="Github">
        <SocialInfo link="#" Icon={FaGithub} />
      </ToolTip>
      <ToolTip tooltip="Upwork">
        <SocialInfo link="#" Icon={FaUpwork} />
      </ToolTip>
      <ToolTip tooltip="Fiverr">
        <SocialInfo link="#" Icon={SiFiverr} />
      </ToolTip>
    </div>
  );
};

export default ContactSocial;
