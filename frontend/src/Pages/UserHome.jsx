import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiBarcode } from "react-icons/pi";
import { TbUserCircle } from "react-icons/tb";
const UserHome = () => {

  return (
    <div className="bg-white items-center rounded-lg shadow-lg relative mx-4 sm:mx-6 md:mx-8 lg:mx-auto lg:max-w-3xl mt-9 w-full h-full max-h-90">
      <div className="flex items-center justify-between  pt-4 px-4 border-b rounded-t">
        <h3 className="text-xl font-semibold">Annual Health Certificate</h3>
      </div>
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-col items-center">
          <TbUserCircle
            aria-hidden="true"
            className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 text-gray-300"
          />
        </div>
        <form action="#">
          <div className="grid grid-cols-6 gap-6">
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                Municipal
              </label>
            </div>

            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                              Honesty
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              {" "}
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                              ID_Number
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              {" "}
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                              Name
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              {" "}
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                              Nationality
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              {" "}
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                              Sex
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              {" "}
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                              Occupation
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                Health Certificate Number{" "}
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="date"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                Date Of Issue Of Health Certificate AD{" "}
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="date"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                Health Certificate Issue Date Hijiri{" "}
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="date"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                Health Certificate Expiry Date Gregorian{" "}
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="date"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                Health Certificate Expiry Date Hijiri{" "}
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="date"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                Educational Program End Date{" "}
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                Type Of Educational Program{" "}
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                              Facility Name
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                License Number{" "}
              </label>
            </div>
            <div
              className="col-span-6 sm:col-span-3 relative flex items-center"
              dir="rtl"
            >
              <input
                type="text"
                name="municipal"
                id="municipal"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder=" "
                required
              />
              <label
                htmlFor="municipal"
                className="absolute text-sm font-medium text-gray-900 -top-2.5 right-2.5 bg-white px-1 flex items-center"
              >
                No.Facility Number{" "}
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserHome;
