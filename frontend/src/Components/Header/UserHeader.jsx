import React, { useState } from "react";
import { Link } from "react-router-dom";
const UserHeader = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
       setIsMenuOpen(!isMenuOpen);
     };
  return (
    <nav className="bg-teal-900 border-gray-200 dark:bg-teal-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center lg:hidden">
          <button
            data-collapse-toggle="mobile-menu-2"
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-grow flex items-center justify-center lg:justify-start">
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto ${
              isMenuOpen ? "block" : "hidden"
            } lg:block`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0"></ul>
          </div>
        </div>
        <div className="flex items-center flex-shrink-0 ml-auto">
         
            <img
              src="https://balady.gov.sa/themes/custom/balady_new/logo.svg" // Update with the path to your logo
              alt="Logo"
              className="h-9 w-30"
            />
         
        </div>
      </div>
    </nav>
  );
}

export default UserHeader
