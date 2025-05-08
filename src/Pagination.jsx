export function Pagination({ currentPage, pageCount, onPageChanged }) {
  function handleNext() {
    if (currentPage < pageCount) {
      onPageChanged(currentPage + 1);
    }
  }

  function handlePrevious() {
    if (currentPage > 1) {
      onPageChanged(currentPage - 1);
    }
  }

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(
        <li key={i}>
          <button
            className={`pagination-link ${currentPage === i ? "is-current" : ""}`}
            aria-label={`Go to page ${i}`}
            aria-current={currentPage === i ? "page" : undefined}
            onClick={() => onPageChanged(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };


  // https://bulma.io/documentation/components/pagination/
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button className="pagination-previous" onClick={handlePrevious} disabled={currentPage === 1}>
        Previous page
      </button>
      <button className="pagination-next" onClick={handleNext} disabled={currentPage === pageCount}>
        Next page
      </button>
      <ul className="pagination-list">{renderPageNumbers()}</ul>
    </nav>
  );
}