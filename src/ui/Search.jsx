function Search({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="grep -i '...'"
      value={value}
      onChange={onChange}
      className="font-mono text-sm px-4 py-2 border border-[var(--sig-line)] bg-[var(--sig-panel)] backdrop-blur text-[var(--sig-text)] mb-6 w-full
      placeholder:text-[var(--sig-muted)]
      focus:outline-none focus:border-[var(--sig-green)]"
    />
  );
}
export default Search;
