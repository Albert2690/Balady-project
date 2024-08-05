// Footer.js
import React from "react";
import vision from "../../assets/vision.jpg";

const Footer = () => {
  return (
    <footer
      style={{ borderTopWidth: "22px", borderTopColor: "#f5f5f4" }}
      className="bg-white border-t-8 border-gray-50 dark:border-gray-10 shadow-lg mt-auto w-full"
    >
      <div className="container px-4 py-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <img className="w-auto h-[70px]" src={vision} alt="" />
          </a>
          <div className="flex justify-center items-center max-w-md mx-auto">
            <p className="text-black text-xs md:text-sm lg:text-xs whitespace-nowrap text-center">
              وزارة الشؤون البلدية والقروية والإسكان
            </p>
            <p className="text-black text-xs md:text-sm lg:text-xs whitespace-nowrap text-center ml-2">
              2023 ©
            </p>
          </div>
          <div className="flex justify-center">
            <ul className="flex">
              <li>
                <a
                  href="#"
                  className="tracking-wide text-xs text-black capitalize transition-colors duration-300 transform rounded-md px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  خريطة الموقع
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs tracking-wide text-black capitalize transition-colors duration-300 transform rounded-md px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs tracking-wide text-black capitalize transition-colors duration-300 transform rounded-md px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
