function Search({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="grep -i '...'"
      value={value}
      onChange={onChange}
      className="font-jbmono text-sm px-4 py-2 border border-[var(--ide-line)] bg-[var(--ide-sidebar)] text-[var(--ide-text)] mb-6 w-full
      placeholder:text-[var(--ide-muted)]
      focus:outline-none focus:border-[var(--ide-type)]"
    />
  );
}
export default Search;
