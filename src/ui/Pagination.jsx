import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function nextPage() {
    const next = currentPage === totalPages ? currentPage : currentPage + 1;
    searchParams.set('page', next.toString());
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev.toString());
    setSearchParams(searchParams);
  }

  if (totalPages <= 1) return null;

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 font-mono text-xs">
      <p className="text-[var(--sig-muted)]">
        Page <span className="text-[var(--sig-text)]">{currentPage}</span> of{' '}
        <span className="text-[var(--sig-text)]">{totalPages}</span>
      </p>
      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-2 border transition-colors ${
            currentPage === 1
              ? 'border-[var(--sig-line)] text-[var(--sig-muted)] cursor-not-allowed'
              : 'border-[var(--sig-line)] text-[var(--sig-green)] hover:border-[var(--sig-green)]'
          }`}
        >
          <HiChevronLeft className="h-4 w-4" /><span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 px-3 py-2 border transition-colors ${
            currentPage === totalPages
              ? 'border-[var(--sig-line)] text-[var(--sig-muted)] cursor-not-allowed'
              : 'border-[var(--sig-line)] text-[var(--sig-green)] hover:border-[var(--sig-green)]'
          }`}
        >
          <span>Next</span><HiChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
