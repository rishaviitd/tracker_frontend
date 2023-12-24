import React from "react";

export default function SideBar() {
  return (
    <aside className="hidden sm:flex sm:flex-col bg-gray-800 text-gray-500">
      {/* Logo */}
      <a
        href="/"
        className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500"
      >
        {/* Replace the following line with your company logo SVG or image */}
        <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
          <title>Company logo</title>
          <path
            d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z"
            fill="#fff"
          />
        </svg>
      </a>

      {/* <nav className="flex flex-col   mx-4 my-6 space-y-4">
       
        <a
          href="/fundaments"
          className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
        >
          <span className="sr-only">Fundaments</span>
          
          Fundamentals
        </a>

        <a
          href="/collage-stuff"
          className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
        >
          <span className="sr-only">Collage Stuff</span>
          Collage Stuff
        </a>

        <a
          href="/entertainment"
          className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
        >
          <span className="sr-only">Entertainment</span>
          Entertainment
        </a>

        <a
          href="/expenses"
          className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
        >
          <span className="sr-only">Expenses</span>
          Expenses
        </a>
      </nav> */}
    </aside>
  );
}
