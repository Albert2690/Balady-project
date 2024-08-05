import React, { useEffect, useState } from "react";
import apiInstance from "../Api";
import { TbUserCircle } from "react-icons/tb";
import { useParams,useNavigate,useLocation } from "react-router-dom";
import logo from "../assets/albert.jpg";
import Loader from "../Components/Loder/Loader.jsx";
import UserHeader from '../Components/Header/UserHeader.jsx'
import Footer from "../Components/Footer/Footer.jsx";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const UserHome = () => {
  // const { id } = useParams();
  const query = useQuery()
  const uuid = query.get("uuid");
  const id = uuid
  const navigate = useNavigate()
  console.log(id, "while sdcanning");
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState({
    municipal: "",
    honesty: "",
    id_Number: "",
    studentName: "",
    nationality: "",
    sex: "",
    occupation: "",
    health_Certificate_Number: "",
    date_Of_issue_Of_Health_Certificate_AD: "",
    health_Certificate_Issue_Date_Hijri: "",
    health_Certificate_ExpiryDate_Gregorian: "",
    health_Certificate_ExpiryDate_Hijri: "",
    Educational_Program_End_Date: "",
    type_Of_Educational_Program: "",
    facility_Name: "",
    license_Number: "",
    facility_Number: "",
    image: "",
  });
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return dateString.slice(0, 10);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/student/get-student/${id}`);
        if (response.data) {
          const studentData = response.data.student;
          setData({
            municipal: studentData.municipal || "",
            honesty: studentData.honesty || "",
            id_Number: studentData.id_Number || "",
            studentName: studentData.studentName || "",
            nationality: studentData.nationality || "",
            sex: studentData.sex || "",
            occupation: studentData.occupation || "",
            health_Certificate_Number:
              studentData.health_Certificate_Number || "",
            date_Of_issue_Of_Health_Certificate_AD: formatDate(
              studentData.date_Of_issue_Of_Health_Certificate_AD
            ),
            health_Certificate_Issue_Date_Hijri: formatDate(
              studentData.health_Certificate_Issue_Date_Hijri
            ),
            health_Certificate_ExpiryDate_Gregorian: formatDate(
              studentData.health_Certificate_ExpiryDate_Gregorian
            ),
            health_Certificate_ExpiryDate_Hijri: formatDate(
              studentData.health_Certificate_ExpiryDate_Hijri
            ),
            Educational_Program_End_Date: formatDate(
              studentData.Educational_Program_End_Date
            ),
            type_Of_Educational_Program:
              studentData.type_Of_Educational_Program || "",
            facility_Name: studentData.facility_Name || "",
            license_Number: studentData.license_Number || "",
            facility_Number: studentData.facility_Number || "",
            image: studentData.image || "",
          });
        }
        console.log(response,'dateaaaaaaa')
        setTimeout(() => {
          setisLoading(false);
        }, 1000);
      
      } catch (error) {
        if (error.message === 'Request failed with status code 404') {
          console.log('Redirecting to not found page');
          navigate('/user/error');
        console.error("Error Fetching student data:", error);
      }
    };
  }

    fetchData();
  }, []);

  const handleClick = (e) => {
    e.target.focus();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <UserHeader/>
        <div className="bg-white flex flex-col min-h-screen pt-16 z--999 lg:px-8">
            
      <div className="bg-white  items-center rounded-lg  rounded-t  md:shadow-lg relative mx-4 sm:mx-6 md:mx-auto lg:mx-auto max-w-full sm:max-w-full md:max-w-lg lg:max-w-3xl mt-9  w-full h-full max-h-90 p-4 sm:p-6">
      <hr className="w-full border-t-[4px] border-gray-100 shadow-sm" />

        <div className="flex items-center justify-center  px-4 ">
          <h2 className=" md:max-w-[400px] text-center font-semibold text-[2rem] text-gray-700 ">
            {" "}
            شهادة صحية سنوية
          </h2>
        </div>
        <div className="p-4 sm:p-6 md:p-8 space-y-6">
          <div className="flex flex-col items-center">
            {data ? (
              <img
                src={data?.image}
                alt="Student Image"
                className="h-[200px] w-[150px] sm:h-28 sm:w-28 md:h-32 md:w-32 "
              />
            ) : (
              <TbUserCircle
                aria-hidden="true"
                className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 text-gray-300"
              />
            )}
          </div>
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span tabIndex={0} onClick={handleClick} className="shadow-sm text-start bg-gray-50 border border-gray-300 text-gray-900 h-[51px] sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-3">
                  {data?.honesty}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  أمانة
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                {/* <input
              type="text"
              name="municipal"
              id="municipal"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder=" "
              required
            /> */}
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-3">
                  {data?.municipal}{" "}
                </span>
                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  البلدية
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                {" "}
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm  h-[51px]text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-3">
                  {data?.studentName}{" "}
                </span>
                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  الاسم
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                {" "}
                <span
                  onClick={handleClick}
                  tabIndex={0}
                  className="shadow-sm text-start h-[51px] bg-[#f3f6f7] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5"
                >
                  {data?.id_Number}{" "}
                </span>
                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  رقم الهوية
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                {" "}
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.sex}{" "}
                </span>
                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  الجنس
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                {" "}
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg ffocus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.nationality}{" "}
                </span>
                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  جنسية
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.health_Certificate_Number}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute  font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  رقم الشهادة الصحية{" "}
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                {" "}
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.occupation}{" "}
                </span>
                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  الْمِهْنَة  
                </label>
              </div>

              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm  text-start h-[51px] bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.health_Certificate_Issue_Date_Hijri}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  تاريخ إصدار الشهادة الصحية هجري{" "}
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.date_Of_issue_Of_Health_Certificate_AD}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  تاَرِيخُ نِّهاَدَةَ الشَّهاَدَةِ الصَّحِيَّةِ مِيلآدِي
                </label>
              </div>

              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.health_Certificate_ExpiryDate_Hijri}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  تاريخ انتهاء الشهادة الصحية هجري{" "}
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.health_Certificate_ExpiryDate_Gregorian}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  تاريخ انتهاء الشهادة الصحية ميلادي{" "}
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.type_Of_Educational_Program}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  نوع البرنامج التعليمي{" "}
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.Educational_Program_End_Date}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  تَارِيخُ انْتِهَاءِ الْبَرْنَامَجِ اَلْتَثْقِيفِي
                </label>
              </div>

              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.license_Number}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  رقم الرخصة{" "}
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span  tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#07706C] focus:border-[#07706C] focus:text-[#07706C] block w-full p-2.5">
                  {data?.facility_Name}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  إسم المنشأة
                </label>
              </div>
              <div
                className="col-span-6 sm:col-span-3 relative flex items-center"
                dir="rtl"
              >
                <span tabIndex={0} onClick={handleClick} className="shadow-sm h-[51px] text-start bg-[#f3f6f7]  border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5">
                  {data?.facility_Number}{" "}
                </span>

                <label
                  htmlFor="municipal"
                  className="absolute  font-semibold text-[100%] text-black -top-2.5 right-2.5 bg-white px-1 flex items-center"
                >
                  رقم المنشأة{" "}
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
     
      <Footer/>
      </>
       )} 
    </>
  );
};

export default UserHome;