import React from "react";
import vision from "../../assets/vision.jpg";
const Footer = () => {
  return (
    <>
      {/* component */}
      <footer
        style={{ borderTopWidth: "22px", borderTopColor: "#f5f5f4" }}
        className="bg-white mt-16 border-gray-50 dark:border-gray-10 shadow-lg"
      >
        <div className="container px-4  mx-auto">
          <div className="flex flex-col  items-center text-center">
            <a href="#">
              <img className="w-auto h-[70px]  " src={vision} alt="" />
            </a>
            <div className="space-y-2">
              <div className="flex justify-center items-center max-w-md mx-auto">
                <p className="text-black text-[8px] font-semibold md:text-sm lg:text-xs whitespace-nowrap text-center">
                  وزارة الشؤون البلدية والقروية والإسكان
                </p>
                <p className="text-black text-xs md:text-sm lg:text-xs whitespace-nowrap text-center ml-2">
                  2023 ©
                </p>
              </div>

              <div className="flex justify-center">
                <ul className="flex gap-1 ">
                  <li>
                    <a
                      href="#"
                      className="tracking-wide text-[8px] font-semibold text-black capitalize transition-colors duration-300 transform rounded-md px-2 py-2  hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      خريطة الموقع
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-[8px] tracking-wide text-black font-semibold capitalize transition-colors duration-300 transform rounded-md px-2 py-2  hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      شروط الاستخدام
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[8px] tracking-wide mb-2 text-black capitalize font-semibold transition-colors duration-300 transform rounded-md px-2 py-2  hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      اتصل بنا
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
