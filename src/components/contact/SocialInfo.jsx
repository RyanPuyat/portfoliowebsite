const SocialInfo = ({ link, Icon }) => {
  return (
    <div className="mb-5 text-2xl h-12 w-12 border rounded-full p-1 flex items-center justify-center">
      <a
        className="cursor-pointer"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SocialInfo;
