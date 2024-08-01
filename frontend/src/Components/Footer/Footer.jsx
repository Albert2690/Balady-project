import React from 'react'
import vision from '../../assets/vision.jpg'
const Footer = () => {
  return (
    <>
      {/* component */}
      <footer className="bg-white border-t mt-20 border-gray-300 dark:border-gray-700 shadow-lg">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <img
                className="w-auto h-24 "
                src={vision}
                alt=""
              />
            </a>
            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              Ministry of Municipal and Rural Affairs and Housing 2023 ©{" "}
            </p>
            <div className="flex flex-col w-full mt-4 sm:flex-row items-center sm:justify-between">
              <ul className="flex flex-row mt-4 w-full items-center justify-center space-y-2 sm:space-y-0 sm:space-x-5">
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm tracking-wide text-blue-600 capitalize transition-colors duration-300 transform  rounded-md px-2 py-2 dark:border-gray-400 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Site Map
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm tracking-wide text-blue-600 capitalize transition-colors duration-300 transform  rounded-md px-2 py-2 dark:border-gray-400 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm tracking-wide text-blue-600 capitalize transition-colors duration-300 transform rounded-md px-2 py-2 dark:border-gray-400 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Call Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
