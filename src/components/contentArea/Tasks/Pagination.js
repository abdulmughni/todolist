import React from "react";

const Pagination = ({
  onPrevClick,
  onNextClick,
  currentPage,
  maxPageLimit,
  minPageLimit,
  onPageChange,
  totalCount,
}) => {
  const totalPages = totalCount <= 10 ? 1 : Math.ceil(totalCount / 10);

  // build page numbers list based on total number of pages
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    onPrevClick();
  };

  const handleNextClick = () => {
    onNextClick();
  };

  const handlePageClick = (e) => {
    onPageChange(Number(e.target.id));
  };

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <a
          href="#"
          aria-current="page"
          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
            currentPage === page
              ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
              : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
          }`}
          key={page}
          id={page}
          onClick={handlePageClick}
        >
          {" "}
          {page}{" "}
        </a>
      );
    } else {
      return null;
    }
  });

  // Page Increment Button
  let pageIncrementBtn = null;
  if (pages.length > maxPageLimit) {
    pageIncrementBtn = (
      <a
        href="#"
        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        onClick={handleNextClick}
      >
        {" "}
        &hellip;{" "}
      </a>
    );
  }

  // Page Decrement Button
  let pageDecrementBtn = null;
  if (minPageLimit >= 1) {
    pageDecrementBtn = (
      <a
        href="#"
        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        onClick={handlePrevClick}
      >
        {" "}
        &hellip;{" "}
      </a>
    );
  }

  return (
    <div className="text-center mt-10">
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <a
          href="#"
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={handlePrevClick}
          disabled={currentPage === pages[0]}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        {pageDecrementBtn}
        {pageNumbers}
        {pageIncrementBtn}
        <a
          href="#"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={handleNextClick}
          disabled={currentPage === pages[pages.length - 1]}
        >
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
