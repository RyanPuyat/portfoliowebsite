export default function Filter({ categories, selected, onSelect }) {
  return (
    <div className="mb-8 flex gap-2 flex-wrap font-jbmono text-xs">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-3 py-1.5 border transition-colors cursor-pointer ${
            selected === category
              ? 'bg-[var(--ide-type)] border-[var(--ide-type)] text-[#1E1E1E]'
              : 'bg-[var(--ide-sidebar)] border-[var(--ide-line)] text-[var(--ide-muted)] hover:text-[var(--ide-text)]'
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
