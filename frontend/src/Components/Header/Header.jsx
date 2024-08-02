import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Cookie from "js-cookie";
import "./Header.css"; // Import the CSS file for additional styling
import logo from  '../../assets/logo-3.jpeg'



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookie.get("adminJwt");
      setIsAuthenticated(!!token);
    };

    checkAuthentication();

    const interval = setInterval(() => {
      checkAuthentication();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    Cookie.remove("adminJwt");
    window.location.href = "/admin/login";
  };

  return (
    <nav className=" border-gray-200 header">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center mx-3 justify-between w-full lg:w-auto">
        <button
            data-collapse-toggle="mobile-menu-2"
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={'w-6 h-6'}
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
            {/* <svg
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
            </svg> */}
          </button>
          <img
            // src="https://balady.gov.sa/themes/custom/balady_new/logo.svg"
            src={logo}
            alt="Logo"
            className="h-16 w-30 lg:ml-8"
          />
      
        </div>
        <div
          className={`w-full lg:flex lg:items-center mx-3 lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col lg:flex-row lg:space-x-8 gap-1.5 md:gap-0 mt-4 lg:mt-0 lg:ml-auto lg:mr-8 text-right">
            <li>
              <a
                href="https://balady.gov.sa/en"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                aria-current="page"
              >
                عن بلدي
              </a>
            </li>
            <li>
              <a
                href="https://balady.gov.sa/en"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                مركز المعرفة
              </a>
            </li>
            <li>
              <a
                href="https://balady.gov.sa/en"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                الخدمات
              </a>
            </li>
            <li>
              <a
                href="https://balady.gov.sa/en"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                الاستعلامات
              </a>
            </li>
            <li>
              <a
                href="https://balady.gov.sa/en"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                المنصات
              </a>
            </li>
            <li>
              <a
                href="https://balady.gov.sa/en"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                تواصل معنا
              </a>
            </li>
            {/* {isAuthenticated && (
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="mr-2" />
                  تسجيل خروج
                </a>
              </li>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
