
export default function Home() {
  return (
    <div className="block max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h5 className="mb-4 text-2xl font-semibold tracking-tight leading-8 text-gray-900">
        Noteworthy technology acquisitions 2021
      </h5>

      <p className="mb-6 text-gray-600">
        Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.
      </p>

      <a
        href="#"
        className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm
                  hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Read more
        <svg
          className="w-4 h-4 ms-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </a>
    </div>
  );
}
