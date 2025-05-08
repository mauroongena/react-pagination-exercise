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

    const createPageButton = (page) => (
      <li key={page}>
        <button
          className={`pagination-link ${currentPage === page ? "is-current" : ""}`}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
          onClick={() => onPageChanged(page)}
        >
          {page}
        </button>
      </li>
    );

    if (pageCount <= 6) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(createPageButton(i));
      }

    } else {
      if (currentPage <= 3) {

        for (let i = 1; i <= 4; i++) {
          pages.push(createPageButton(i));
        }

        pages.push(<li key="dots-end">…</li>);
        pages.push(createPageButton(pageCount));

      } else if (currentPage >= pageCount - 2) {
        pages.push(createPageButton(1));
        pages.push(<li key="dots-start">…</li>);

        for (let i = pageCount - 3; i <= pageCount; i++) {
          pages.push(createPageButton(i));
        }

      } else {
        pages.push(createPageButton(1));
        pages.push(<li key="dots-start">…</li>);

        pages.push(createPageButton(currentPage - 1));
        pages.push(createPageButton(currentPage));
        pages.push(createPageButton(currentPage + 1));
        
        pages.push(<li key="dots-end">…</li>);
        pages.push(createPageButton(pageCount));
      }
    }

    return pages;
  };

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button className="pagination-previous" onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <button className="pagination-next" onClick={handleNext} disabled={currentPage === pageCount}>
        Next
      </button>
      <ul className="pagination-list">{renderPageNumbers()}</ul>
    </nav>
  );
}
