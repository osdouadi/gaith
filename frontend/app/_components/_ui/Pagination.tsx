import React from "react";
import { usePagination, DOTS } from "../../_hooks/usePagination";

function Pagination({
  onPageChange,
  currentPage,
  siblingCount = 1,
  totalPageCount,
}: {
  onPageChange: (pageNumber: number) => void;
  currentPage: number;
  siblingCount: number;
  totalPageCount: number;
}) {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  });

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNextPage = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevPage = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex flex-col items-center px-5 py-5 xs:flex-row xs:justify-between">
      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border rounded-full hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onPrevPage}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <button
                key={index}
                className="cursor-default w-full px-4 py-2 text-base bg-white border rouded-full"
              >
                &#8230;
              </button>
            );
          }

          return (
            <button
              key={pageNumber.toString()}
              type="button"
              className={`w-full px-4 py-2 text-base border ${
                pageNumber === currentPage
                  ? "text-white bg-primary rounded-full"
                  : "text-gray-600 bg-white hover:bg-gray-100 rounded-full"
              }`}
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          disabled={currentPage === lastPage}
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-l rounded-full hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onNextPage}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
