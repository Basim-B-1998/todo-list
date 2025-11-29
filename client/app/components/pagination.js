"use client";

export default function Pagination({ totalItems, page, onPageChange }) {


  const totalPages = Math.ceil(totalItems / 4);

  const goToPage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      onPageChange(selectedPage);
    }
  };

  return (
    <div className="flex gap-2 mt-6">
      <button
        onClick={() => goToPage(page - 1)}
        className="px-3 py-1 rounded"
      >
        ◀
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => goToPage(i + 1)}
          className={`px-3 py-1 rounded ${
            page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => goToPage(page + 1)}
        className="px-3 py-1 rounded"
      >
        ▶
      </button>
    </div>
  );
}
