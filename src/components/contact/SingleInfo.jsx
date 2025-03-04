const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-center tracking-tighter">
      <Image className="text-xl" />
      <p className="my-1">{text}</p>
    </div>
  );
};

export default SingleInfo;
