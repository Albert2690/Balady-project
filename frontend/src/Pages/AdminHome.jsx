import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiBarcode } from "react-icons/pi";
import { TbUserCircle } from "react-icons/tb";
import apiInstance from "../Api";
import uploadImageCloudinary from "../../utils/uploadCloudinary.js";
import { toast } from "react-toastify";
import EditModal from "./EditModal";
import QRCodeModal from "./QRCodeModal";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2';


const AdminHome = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedQRCode, setSelectedQRCode] = useState("");

  const [search, setSearch] = useState("");
  const [isQRCodeModal, setQRCodeModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [selectedFile, setselectedFile] = useState("");
  const [error, setError] = useState({});
  const [data, setData] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [update, setUpdate] = useState(false);
  const [deleted,setDeleted] = useState(false)

  const handleEditClick = (studentId) => {
    setStudentId(studentId);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };
  const handleQRCode = (qrcode) => {
    setSelectedQRCode(qrcode);

    setQRCodeModal(true);
  };

  const handleCloseQRCode = () => {
    setQRCodeModal(false);
  };
  const [student, setStudent] = useState({
    name: "",
    honesty: "",
    id_Number: "",
    sex: "",
    health_Certificate_Number: "",
    date_Of_issue_Of_Health_Certificate_AD: "",
    municipal: "",
    health_Certificate_Issue_Date_Hijri: "",
    health_Certificate_ExpiryDate_Gregorian: "",
    health_Certificate_ExpiryDate_Hijri: "",
    occupation: "",

    nationality: "",
    Educational_Program_End_Date: "",
    facility_Number: "",
    facility_Name: "",
    license_Number: "",
    type_Of_Educational_Program: "",
  });
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

    if (file) {
      setselectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } 
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmission = () => {
    console.log(student, "while submittinh");
    const newErrors = {};
    if (student.name === "" || student.name.length < 3) {
      newErrors.name = "Student name should be more than 2 characters";
    }
    if (student.municipal === "") {
      newErrors.municipal = "Municipal should not be empty";
    }
    if (student.id_Number === "" || student.id_Number <= 0) {
      newErrors.id_Number = "Enter a valid ID number";
    }
    if (student.honesty === "") {
      newErrors.honesty = "Honesty should not be empty";
    }
    if (student.sex === "") {
      newErrors.sex = "Sex should not be empty";
    }
    if (student.health_Certificate_Number === "") {
      newErrors.health_Certificate_Number =
        "Health Certificate Number should not be empty";
    }
    if (student.date_Of_issue_Of_Health_Certificate_AD === "") {
      newErrors.date_Of_issue_Of_Health_Certificate_AD =
        "Date of Issue of Health Certificate (AD) should not be empty";
    }
    if (student.health_Certificate_Issue_Date_Hijri === "") {
      newErrors.health_Certificate_Issue_Date_Hijri =
        "Health Certificate Issue Date (Hijri) should not be empty";
    }
    if (student.health_Certificate_ExpiryDate_Gregorian === "") {
      newErrors.health_Certificate_ExpiryDate_Gregorian =
        "Health Certificate Expiry Date (Gregorian) should not be empty";
    }
    if (student.health_Certificate_ExpiryDate_Hijri === "") {
      newErrors.health_Certificate_ExpiryDate_Hijri =
        "Health Certificate Expiry Date (Hijri) should not be empty";
    }
    if (student.occupation === "") {
      newErrors.occupation = "Occupation should not be empty";
    }
    if (student.nationality === "") {
      newErrors.nationality = "Nationality should not be empty";
    }
    if (student.Educational_Program_End_Date === "") {
      newErrors.Educational_Program_End_Date =
        "Educational Program End Date should not be empty";
    }
    if (student.facility_Number === "") {
      newErrors.facility_Number = "Facility Number should not be empty";
    }
    if (student.facility_Name === "") {
      newErrors.facility_Name = "Facility Name should not be empty";
    }
    if (student.type_Of_Educational_Program === "") {
      newErrors.type_Of_Educational_Program =
        "Type of Educational Program should not be empty";
    }
    if (student.license_Number === "") {
      newErrors.license_Number = "Type of license_Number should not be empty";
    }
 if (!selectedFile) {
   newErrors.profilePhoto = "Profile photo should not be empty";
 }
    setError(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setError({});
      handleApi();
    }
  };
  const handleApi = async () => {
    console.log('handleapiii');
    try {
      const uploadResponse = await uploadImageCloudinary(selectedFile);
console.log(uploadResponse.secure_url,'url');
      const response = await apiInstance.post(
        "student/create-student",
        {
          student,
          image: uploadResponse.secure_url,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response,"after api call");
      if (response.data.success) {
         setIsModalOpen(false);
        toast.success("Student profile created successfully");
        setTimeout(() => {
    location.reload();
  }, 1000);
      } else {
        toast.error(response.data.error);
      }
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get("/admin/students", {
          withCredentials: true,
        });
        console.log(response.data.students, "Fetched students data");

        if (response.data && Array.isArray(response.data.students)) {
          setData(response.data.students);
        }
      } catch (error) {
        console.error("Error fetching students data:", error);
      }
    };

    fetchData();
  }, [update,deleted]);

  console.log(student, "studdd");

  const handleDelete = async (studentId) => {
    try {
      const response = await apiInstance.put(
        "/admin/edit-listing",
        { id: studentId },
        {
          withCredentials: true,
        }
      );

      console.log(response, "response from edit listing");
      setData((prevData) =>
        prevData.map((student) =>
          student._id === studentId
            ? { ...student, is_listed: !student.is_listed }
            : student
        )
      );
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };

const handleDeleteStudent = async (studentId) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      console.log(studentId, 'st');
      try {
        const response = await apiInstance.delete(
          "/admin/delete-student",
          {
            data: { id: studentId },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          console.log(response, "response from delete listing");
          setDeleted(prevDeleted => !prevDeleted);
          toast.success(response.data.message);
        }
      } catch (error) {
        console.error("Error deleting student", error);
        toast.error("Failed to delete student.");
      }
    }
  });
};

  let filteredStudents = data.filter((user) =>
    user.studentName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* component */}
      <div className="bg-white flex flex-col min-h-screen pt-[85px] md:pt-16  lg:px-8">
      <div className="bg-white p-4 md:mt-10 sm:p-8 rounded-md w-full">
        <div className="flex flex-col md:flex-row items-start justify-between pb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-gray-600 font-semibold">STUDENTS</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full gap-5 md:max-w-2xl">
            <div className="flex bg-gray-50 items-center p-2 rounded-md w-full md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 outline-none ml-1 block w-full"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search..."
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 space-x-8">
              <button
                onClick={toggleModal}
                className="bg-teal-900 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              >
                Create New Student
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 md:mt-5 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      ID Number
                    </th>
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Sex
                    </th>
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Nationality
                    </th>
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Occupation
                    </th>
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Health Certificate No
                    </th>
                    <th className="px-11 py-3 border-b-2  border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Actions
                    </th>
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(filteredStudents) &&
                    filteredStudents.map((student, idx) => (
                      <tr key={idx}>
                        {" "}
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {idx + 1}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              {student.image ? (
                                <img
                                  className="w-full h-full rounded-full"
                                  src={student.image}
                                  alt={student.studentName}
                                />
                              ) : (
                                <TbUserCircle className="w-10 h-10 text-gray-400" />
                              )}
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {student.studentName}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {student.id_Number}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {" "}
                            {student.sex}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {" "}
                            {student.nationality}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {" "}
                            {student.occupation}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {" "}
                            {student.health_Certificate_Number}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex space-x-4">
                            <MdOutlineEdit
                              className="text-blue-600 w-6 h-6 cursor-pointer"
                              onClick={() => handleEditClick(student._id)}
                            />
                            {student.is_listed ? (
                              <FaRegEye
                                className="text-green-500 w-6 h-6 cursor-pointer"
                                onClick={() => handleDelete(student._id)}
                              />
                            ) : (
                              <FaEyeSlash
                                onClick={() => handleDelete(student._id)}
                                className="text-red-500 w-6 h-6 cursor-pointer"
                              />
                            )}
                             <RiDeleteBinLine
                              onClick={() => handleDeleteStudent(student._id)}
                              className="text-red w-6 h-6 cursor-pointer"
                            />
                            <PiBarcode
                              onClick={() => handleQRCode(student.qr_code)}
                              className="text-black w-6 h-6 cursor-pointer"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>

      {isEditModalOpen && (
        <EditModal
          onClose={handleCloseEditModal}
          studentId={studentId}
          setUpdate={setUpdate}
          update={update}
        />
      )}
      {isQRCodeModal && (
        <QRCodeModal onClose={handleCloseQRCode} qrcode={selectedQRCode} />
      )}
      {isModalOpen && (
        <div className="fixed inset-0 mt-2 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
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
                  {previewUrl ? (
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
                {error.profilePhoto && (
                  <span className="text-red-600 font-semibold text-xs">
                    {error.profilePhoto}
                  </span>
                )}
              </div>

              <button
                type="button"
                className="text-gray-400  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={toggleModal}
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
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          municipal: e.target.value,
                        }))
                      }
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
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          honesty: e.target.value,
                        }))
                      }
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
                      type="Number"
                      name="id_Number"
                      id="id_Number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          id_Number: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.id_Number && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.id_Number}
                      </span>
                    )}
                    <label
                      htmlFor="id_Number"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      ID_Number <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          name: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.name && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.name}
                      </span>
                    )}
                    <label
                      htmlFor="name"
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
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          nationality: e.target.value,
                        }))
                      }
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
                    <select
                      name="sex"
                      id="sex"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          sex: e.target.value,
                        }))
                      }
                      required
                    >
                      <option value="" disabled selected>
                        Select your sex
                      </option>
                      <option value="ذكر">ذكر</option>
                      <option value="أنثى">أنثى</option>
                      <option value="other">Other</option>
                    </select>
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
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          occupation: e.target.value,
                        }))
                      }
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
                      type="Number"
                      name="health_Certificate_Number"
                      id="health_Certificate_Number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          health_Certificate_Number: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.health_Certificate_Number && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.health_Certificate_Number}
                      </span>
                    )}
                    <label
                      htmlFor="health_Certificate_Number"
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
                      id="date_Of_issue_Of_Health_Certificate_AD"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          date_Of_issue_Of_Health_Certificate_AD:
                            e.target.value,
                        }))
                      }
                      required
                    />
                    {error.date_Of_issue_Of_Health_Certificate_AD && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.date_Of_issue_Of_Health_Certificate_AD}
                      </span>
                    )}
                    <label
                      htmlFor="date_Of_issue_Of_Health_Certificate_AD"
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
                      id="health_Certificate_Issue_Date_Hijri"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          health_Certificate_Issue_Date_Hijri: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.health_Certificate_Issue_Date_Hijri && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.health_Certificate_Issue_Date_Hijri}
                      </span>
                    )}
                    <label
                      htmlFor="health_Certificate_Issue_Date_Hijri"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Health Certificate Issue Date Hijiri{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="date"
                      name="health_Certificate_ExpiryDate_Gregorian"
                      id="health_Certificate_ExpiryDate_Gregorian"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          health_Certificate_ExpiryDate_Gregorian:
                            e.target.value,
                        }))
                      }
                      required
                    />
                    {error.health_Certificate_ExpiryDate_Gregorian && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.health_Certificate_ExpiryDate_Gregorian}
                      </span>
                    )}
                    <label
                      htmlFor="health_Certificate_ExpiryDate_Gregorian"
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
                      id="health_Certificate_ExpiryDate_Hijri"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          health_Certificate_ExpiryDate_Hijri: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.health_Certificate_ExpiryDate_Hijri && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.health_Certificate_ExpiryDate_Hijri}
                      </span>
                    )}
                    <label
                      htmlFor="health_Certificate_ExpiryDate_Hijri"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Health Certificate Expiry Date Hijiri{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="date"
                      name="Educational_Program_End_Date"
                      id="Educational_Program_End_Date"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          Educational_Program_End_Date: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.Educational_Program_End_Date && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.Educational_Program_End_Date}
                      </span>
                    )}
                    <label
                      htmlFor="Educational_Program_End_Date"
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
                      id="type_Of_Educational_Program"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          type_Of_Educational_Program: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.type_Of_Educational_Program && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.type_Of_Educational_Program}
                      </span>
                    )}
                    <label
                      htmlFor="type_Of_Educational_Program"
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
                      id="facility_Name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          facility_Name: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.facility_Name && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.facility_Name}
                      </span>
                    )}
                    <label
                      htmlFor="facility_Name"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Facility Name <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="Number"
                      name="license_Number"
                      id="license_Number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          license_Number: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.license_Number && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.license_Number}
                      </span>
                    )}
                    <label
                      htmlFor="license_Number"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      License Number{" "}
                      <span className="text-red-600 font-semibold text-xs">
                        *
                      </span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="Number"
                      name="facility_Number"
                      id="facility_Number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e) =>
                        setStudent((state) => ({
                          ...state,
                          facility_Number: e.target.value,
                        }))
                      }
                      required
                    />
                    {error.facility_Number && (
                      <span className="text-red-600 font-semibold text-xs">
                        {error.facility_Number}
                      </span>
                    )}
                    <label
                      htmlFor="facility_Number"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      No.Facility Number{" "}
                      <span className="text-red-600 font-semibold text-xs">
                        *
                      </span>
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
      )}
    </>
  );
};

export default AdminHome;
