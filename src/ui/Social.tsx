import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUpwork } from 'react-icons/fa6';

function Social({ size = 28 }: { size?: number }) {
  const cls =
    'text-[var(--sig-muted)] transition-all duration-200 hover:text-[var(--sig-green)] hover:scale-110 hover:drop-shadow-[0_0_8px_var(--sig-green-dim)]';
  return (
    <div className="flex justify-center flex-row gap-6">
      <Link to="https://www.linkedin.com/in/ryanpuyat" target="_blank" rel="noopener noreferrer" className={cls}>
        <FaLinkedin size={size} />
      </Link>
      <Link to="https://github.com/RyanPuyat" target="_blank" rel="noopener noreferrer" className={cls}>
        <FaGithub size={size} />
      </Link>
      <Link to="https://www.upwork.com/freelancers/~01cfaba0230783c449" target="_blank" rel="noopener noreferrer" className={cls}>
        <FaUpwork size={size} />
      </Link>
    </div>
  );
}

export default Social;
