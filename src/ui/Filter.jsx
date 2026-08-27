export default function Filter({ categories, selected, onSelect }) {
  return (
    <div className="mb-8 flex gap-2 flex-wrap font-mono text-xs">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-3 py-1.5 border transition-all duration-150 cursor-pointer active:scale-95 ${
            selected === category
              ? 'bg-[var(--sig-green)] border-[var(--sig-green)] text-[#0A0E12] shadow-[0_0_12px_var(--sig-green-dim)]'
              : 'bg-[var(--sig-panel)] border-[var(--sig-line)] text-[var(--sig-muted)] hover:text-[var(--sig-text)] hover:border-[var(--sig-green-dim)]'
          }`}
          onClick={() => onSelect(category)}
        >
          [ {category.toUpperCase()} ]
        </button>
      ))}
    </div>
  );
}
