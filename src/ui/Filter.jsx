export default function Filter({ categories, selected, onSelect }) {
  return (
    <div className="mb-8 flex gap-2 flex-wrap font-mono text-xs">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-3 py-1.5 border transition-colors cursor-pointer ${
            selected === category
              ? 'bg-[var(--sig-green)] border-[var(--sig-green)] text-[#0A0E12]'
              : 'bg-[var(--sig-panel)] border-[var(--sig-line)] text-[var(--sig-muted)] hover:text-[var(--sig-text)]'
          }`}
          onClick={() => onSelect(category)}
        >
          [ {category.toUpperCase()} ]
        </button>
      ))}
    </div>
  );
}
