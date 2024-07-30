import React, { useEffect, useState,useRef } from "react";
import { TbCodeAsterisk, TbUserCircle } from "react-icons/tb";
import apiInstance from "../Api";
import { toast } from "react-toastify";
import uploadImageCloudinary from "../../utils/uploadCloudinary.js";
import DotLoader from 'react-spinners/DotLoader';


const EditModal = ({ onClose }) => {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [selectedFile, setselectedFile] = useState("");
  const [error, setError] = useState({});
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
  });

  const [isLoading,setisLoading] = useState(false)

  const handleFileChange = async (event) => {
    // if (file) {
    //     try {
    //         const uploadResponse = await uploadImageCloudinary(file);
    //         console.log('File uploaded successfully:', uploadResponse.secure_url);
    //         setStudent(state=>state.image=uploadResponse.secure_url)
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //     }
    // }
    const file = event.target.files[0];
    console.log(file, "filet");

    if (file) {
      setselectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return dateString.slice(0, 10);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setisLoading(true)
        const response = await apiInstance.get(
          "/student/get-student/66a87ad4743e6ac8ccdb295b"
        );
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
           
          });
          setselectedFile(studentData.image);
      setPreviewUrl(studentData.image);
        }
    setisLoading(false)
      } catch (error) {
        console.error(
          "Error Fetching student data:",
          error.response.data.error
        );
      }
    };

    fetchData();
  }, []);


  const handleSubmission = () => {
    console.log(data, "while submittinh");
    const newErrors = {};
    if (data.name === "") {
      newErrors.name = "Student name should be more than 2 characters";
    }
    if (data.municipal === "") {
      newErrors.municipal = "Municipal should not be empty";
    }
    if (data.id_Number === "" || data.id_Number <= 0) {
      newErrors.id_Number = "Enter a valid ID number";
    }
    if (data.honesty === "") {
      newErrors.honesty = "Honesty should not be empty";
    }
    if (data.sex === "") {
      newErrors.sex = "Sex should not be empty";
    }
    if (data.health_Certificate_Number === "") {
      newErrors.health_Certificate_Number =
        "Health Certificate Number should not be empty";
    }
    if (data.date_Of_issue_Of_Health_Certificate_AD === "") {
      newErrors.date_Of_issue_Of_Health_Certificate_AD =
        "Date of Issue of Health Certificate (AD) should not be empty";
    }
    if (data.health_Certificate_Issue_Date_Hijri === "") {
      newErrors.health_Certificate_Issue_Date_Hijri =
        "Health Certificate Issue Date (Hijri) should not be empty";
    }
    if (data.health_Certificate_ExpiryDate_Gregorian === "") {
      newErrors.health_Certificate_ExpiryDate_Gregorian =
        "Health Certificate Expiry Date (Gregorian) should not be empty";
    }
    if (data.health_Certificate_ExpiryDate_Hijri === "") {
      newErrors.health_Certificate_ExpiryDate_Hijri =
        "Health Certificate Expiry Date (Hijri) should not be empty";
    }
    if (data.occupation === "") {
      newErrors.occupation = "Occupation should not be empty";
    }
    if (data.nationality === "") {
      newErrors.nationality = "Nationality should not be empty";
    }
    if (data.Educational_Program_End_Date === "") {
      newErrors.Educational_Program_End_Date =
        "Educational Program End Date should not be empty";
    }
    if (data.facility_Number === "") {
      newErrors.facility_Number = "Facility Number should not be empty";
    }
    if (data.facility_Name === "") {
      newErrors.facility_Name = "Facility Name should not be empty";
    }
    if (data.type_Of_Educational_Program === "") {
      newErrors.type_Of_Educational_Program =
        "Type of Educational Program should not be empty";
    }
    if (data.license_Number === "") {
      console.log("licendcee");
      newErrors.license_Number = "Type of license_Number should not be empty";
    }
    console.log(newErrors, "error new error");
    setError(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setError({});
      handleSubmit();
    }
  };
  console.log(error, "error");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "ko");
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("heloooooooooooooo");
    let uploadResponse
    try {

      setisLoading(true)
      if(selectedFile!==''){
        uploadResponse = await uploadImageCloudinary(selectedFile);

      }
      const response = await apiInstance.put(
        "/student/edit-student",
       {student:data,
        studentId:'66a87ad4743e6ac8ccdb295b',
        image:uploadResponse.secure_url
       },
        { withCredentials: true }
      );
      console.log(response.data.success, "responseee");
      if (response.data.success) {
      setisLoading(false)
      onClose();

        toast.success("Student data updated successfully");
        location.reload()
      } else {
        toast.error("Failed to update student data");
      }
    } catch (error) {
      console.error("Error updating student data:", error);
      toast.error("Error updating student data");
    }
  };

  console.log(data, "imgg");
  return (
<>
{isLoading && (
        <div className="fixed inset-0 w-full h-full flex items-center  bg-opacity-50 justify-center  z-50">
          <DotLoader  color="green"
  size={80} />
        </div>
      )}
    
    {!isLoading && <div className="fixed inset-0 mt-2 z-40 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white  border-4 rounded-lg shadow relative m-4 w-full max-w-3xl h-full max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between pt-4 px-4 border-b rounded-t">
          <h3 className="text-xl font-semibold">STUDENTS</h3>

          {/* component */}

          <div className="col-span-full m-8">
            <label
              htmlFor="photo"
              className="block  h-14  text-sm font-medium leading-6 text-gray-900"
            ></label>
            <div className="mt-2 flex items-center gap-x-3">
            
            {previewUrl? (
                    <img
                      className="w-[100px] h-[100px]"
                      src={previewUrl}
                      alt=""
                    />
                  ) : (
                    <TbUserCircle
                      aria-hidden="true"
                      className="h-16 w-16 text-gray-300"
                    />
                  )}
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={handleButtonClick}
              >
                Change
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/jpeg,image/png,image/gif,image/bmp,image/tiff,image/svg+xml,image/webp"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={onClose}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="municipal"
                  id="municipal"
                  value={data?.municipal || ""}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.municipal && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.municipal}
                  </span>
                )}

                <label
                  htmlFor="municipal"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1 flex items-center"
                >
                  Municipal
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>

              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="honesty"
                  id="honesty"
                  value={data?.honesty || ""}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.honesty && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.honesty}
                  </span>
                )}

                <label
                  htmlFor="honesty"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Honesty <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="number"
                  name="id_Number"
                  id="idnumber"
                  value={data?.id_Number}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.id_Number && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.id_Number}
                  </span>
                )}

                <label
                  htmlFor="idnumber"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  ID_Number <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="studentName"
                  id="studentname"
                  value={data?.studentName}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.studentName && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.studentName}
                  </span>
                )}

                <label
                  htmlFor="studentname"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Name <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  value={data?.nationality}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.nationality && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.nationality}
                  </span>
                )}

                <label
                  htmlFor="nationality"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Nationality <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="sex"
                  id="sex"
                  value={data?.sex}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.sex && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.sex}
                  </span>
                )}

                <label
                  htmlFor="sex"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Sex <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  value={data?.occupation}
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.occupation && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.occupation}
                  </span>
                )}

                <label
                  htmlFor="occupation"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Occupation <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="health_Certificate_Number"
                  id="certificate"
                  value={data?.health_Certificate_Number}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.health_Certificate_Number && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.health_Certificate_Number}
                  </span>
                )}

                <label
                  htmlFor="certificate"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Health Certificate Number{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="date"
                  name="date_Of_issue_Of_Health_Certificate_AD"
                  id="issuecertificate"
                  value={data?.date_Of_issue_Of_Health_Certificate_AD}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.date_Of_issue_Of_Health_Certificate_AD && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.date_Of_issue_Of_Health_Certificate_AD}
                  </span>
                )}

                <label
                  htmlFor="issuecertificate"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Date Of Issue Of Health Certificate AD{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="date"
                  name="health_Certificate_Issue_Date_Hijri"
                  id="issuedate"
                  value={data?.health_Certificate_Issue_Date_Hijri}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.health_Certificate_Issue_Date_Hijri && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.health_Certificate_Issue_Date_Hijri}
                  </span>
                )}

                <label
                  htmlFor="issuedate"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Health Certificate Issue Date Hijiri{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="date"
                  name="health_Certificate_ExpiryDate_Hijri"
                  id="expiry"
                  value={data?.health_Certificate_ExpiryDate_Hijri}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.health_Certificate_ExpiryDate_Hijri && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.health_Certificate_ExpiryDate_Hijri}
                  </span>
                )}

                <label
                  htmlFor="expiry"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Health Certificate Expiry Date Gregorian{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="date"
                  name="health_Certificate_ExpiryDate_Hijri"
                  id="expirydate"
                  value={data?.health_Certificate_ExpiryDate_Hijri}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.health_Certificate_ExpiryDate_Hijri && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.health_Certificate_ExpiryDate_Hijri}
                  </span>
                )}

                <label
                  htmlFor="expirydate"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Health Certificate Expiry Date Hijiri{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="date"
                  name=""
                  id="Educational_Program_End_Date"
                  value={data?.Educational_Program_End_Date}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.Educational_Program_End_Date && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.Educational_Program_End_Date}
                  </span>
                )}

                <label
                  htmlFor="edprogram"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Educational Program End Date{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="type_Of_Educational_Program"
                  id="programType"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  value={data?.type_Of_Educational_Program}
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.type_Of_Educational_Program && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.type_Of_Educational_Program}
                  </span>
                )}

                <label
                  htmlFor="programType"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Type Of Educational Program{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="text"
                  name="facility_Name"
                  value={data?.facility_Name}
                  id="facilityname"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.facility_Name && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.facility_Name}
                  </span>
                )}

                <label
                  htmlFor="facilityname"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  Facility Name <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="Number"
                  name="license_Number"
                  id="license"
                  value={data?.license_Number}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.license_Number && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.license_Number}
                  </span>
                )}

                <label
                  htmlFor="license"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  License Number{" "}
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3 relative">
                <input
                  type="Number"
                  name="facility_Number"
                  id="facilitynumber"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  value={data?.facility_Number}
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                {error.facility_Number && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.facility_Number}
                  </span>
                )}

                <label
                  htmlFor="facilitynumber"
                  className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                >
                  No.Facility Number{" "}
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSubmission}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
}
</>

  );
};

export default EditModal;
