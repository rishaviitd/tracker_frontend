import React from "react";

export default function NavBar({ onTabChange }) {
  const HandleTabClick = (tabName) => {
    onTabChange(tabName);
  };
  return (
    <>
      <header className="flex items-center h-20 px-6 sm:px-10 bg-white fixed top-0 w-full z-10">
        <a
          href="/"
          className="inline-flex items-center justify-center h-20 w-20 "
        >
          {/* Your company logo SVG or image */}
          <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
            {/* Replace with your logo path */}
            <path
              d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z"
              fill="#000"
            />
          </svg>
        </a>
        <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
          <span className="sr-only">Menu</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>

        {/* Replace the search bar with 4 tabs */}
        <nav className="flex items-center space-x-16 ml-4">
          {/* Fundaments Tab */}
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 focus:text-gray-800 font-medium"
            onClick={() => {
              HandleTabClick("Fundamentals");
            }}
          >
            Fundamentals
          </a>

          {/* Collage Stuff Tab */}
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 focus:text-gray-800 font-medium"
            onClick={() => {
              HandleTabClick("Collage Stuff");
            }}
          >
            Collage Stuff
          </a>

          {/* Entertainment Tab */}
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 focus:text-gray-800 font-medium"
            onClick={() => {
              HandleTabClick("Expenses");
            }}
          >
            Expenses
          </a>

          {/* Expenses Tab */}
          {/* <a
            href="#"
            className="text-gray-600 hover:text-gray-800 focus:text-gray-800 font-medium"
            onClick={() => {
              HandleTabClick("Entertainment");
            }}
          >
            Entertainment
          </a> */}
        </nav>

        {/* User Profile and Settings */}
        <div className="flex flex-shrink-0 items-center ml-auto">
          <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
            <span className="sr-only">User Menu</span>
            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <span className="font-semibold">Username</span>
              <span className="text-sm text-gray-600">email_id</span>
            </div>
            <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
              <img
                src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
                alt="user profile photo"
                className="h-full w-full object-cover"
              />
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="hidden sm:block h-6 w-6 text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="border-l pl-3 ml-3 space-x-1">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Log out</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
                <span>Logout</span>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
