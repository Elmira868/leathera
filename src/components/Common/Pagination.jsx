const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const visiblePages = getVisiblePages();

  return (
    <nav
      aria-label="Product pagination"
      className="mt-8 flex w-full justify-center px-2 sm:mt-10"
    >
      <div className="flex max-w-full items-center gap-1 overflow-x-auto p-1 sm:gap-2">
        {visiblePages.map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="flex h-9 min-w-7 shrink-0 items-center justify-center text-sm text-gray-400 sm:h-10 sm:min-w-8"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={`h-9 min-w-9 shrink-0 rounded-md border px-2 text-sm transition-colors sm:h-10 sm:min-w-10 ${
                currentPage === page
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>
    </nav>
  );
};

export default Pagination;
