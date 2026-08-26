import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUpwork } from 'react-icons/fa6';

function Social({ size = 28 }: { size?: number }) {
  return (
    <div className="flex justify-center flex-row gap-6 text-[var(--ide-muted)]">
      <Link
        to="https://www.linkedin.com/in/ryanpuyat"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--ide-type)] transition-colors"
      >
        <FaLinkedin size={size} />
      </Link>
      <Link
        to="https://github.com/RyanPuyat"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--ide-type)] transition-colors"
      >
        <FaGithub size={size} />
      </Link>
      <Link
        to="https://www.upwork.com/freelancers/~01cfaba0230783c449"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--ide-type)] transition-colors"
      >
        <FaUpwork size={size} />
      </Link>
    </div>
  );
}

export default Social;
