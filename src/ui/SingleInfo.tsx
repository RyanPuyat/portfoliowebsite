interface MyComponentProps {
  text: string;
  Image: React.ComponentType<any>;
}

const SingleInfo = ({ text, Image }: MyComponentProps) => {
  return (
    <div className="flex items-center justify-center gap-2 text-center tracking-tight text-[var(--ide-muted)]">
      <Image className="text-lg text-[var(--ide-type)]" />
      <p className="my-1">{text}</p>
    </div>
  );
};

export default SingleInfo;
