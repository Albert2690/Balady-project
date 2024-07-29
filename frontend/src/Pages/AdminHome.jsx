import React, { useState,useRef } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiBarcode } from "react-icons/pi";
import { TbUserCircle } from "react-icons/tb";
import apiInstance from "../Api";
import uploadImageCloudinary from "../../utils/uploadCloudinary";
import { toast } from "react-toastify";

const AdminHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [selectedFile, setselectedFile] = useState('');


  const [student, setStudent] = useState({
    name: '',
    honesty:'',
    id_Number: '',
    sex:'',
    health_Certificate_Number:'',
    date_Of_issue_Of_Health_Certificate_AD: '',
    municipal:'',
    health_Certificate_Issue_Date_Hijri:'',
    health_Certificate_ExpiryDate_Gregorian:'',
    health_Certificate_ExpiryDate_Hijri:'',
    occupation:'',
   
    nationality:'',
    Educational_Program_End_Date:'',
    facility_Number:'',
    facility_Name:'',
    license_Number:'',
    type_Of_Educational_Program:''






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
    console.log(file,'filet')

    if (file) {
      setselectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
};
  

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

 
  const handleSubmission = async()=>{
    console.log(student,'while submittinh')
    try{
      const uploadResponse = await uploadImageCloudinary(selectedFile);
      
     
               const response = await apiInstance.post('student/create-student',{
                student,
                image:uploadResponse.secure_url
               })

               console.log(response,'after api call')
               if(response.data.success){
                toast.success('Student profile created successfully')
               }else{
                toast.error(response.data.error)
               }

    }catch(err){
      console.log(err)
      toast.error("Internal Server Error")
    }
  }
  
  console.log(student,'studdd')
  return (
  <>
      {/* component */}
      <div className="bg-white p-4 sm:p-8 rounded-md w-full">
        <div className="flex flex-col md:flex-row items-start justify-between pb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-gray-600 font-semibold">STUDENTS</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full md:max-w-2xl">
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
                placeholder="search..."
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 space-x-8">
              <button
                onClick={toggleModal}
                className="bg-teal-900 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                    <th className="px-5 py-3 border-b-2 border-white bg-teal-900 text-left text-xs font-semibold text-white uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Vera Carpenter
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">43</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">hi</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex space-x-4">
                        <MdOutlineEdit className="text-blue-500 w-6 h-6 cursor-pointer" />
                        <RiDeleteBin6Line className="text-red-500 w-6 h-6 cursor-pointer" />
                        <PiBarcode className="text-black w-6 h-6 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Blake Bowman
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Jan 01, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">77</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">hi</p>
                    </td>{" "}
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex space-x-4">
                        <MdOutlineEdit className="text-blue-500 w-6 h-6 cursor-pointer" />
                        <RiDeleteBin6Line className="text-red-500 w-6 h-6 cursor-pointer" />
                        <PiBarcode className="text-black w-6 h-6 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Dana Moore
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Jan 10, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">64</p>
                    </td>
                    <td>
                      <p>hiiii</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex space-x-4">
                        <MdOutlineEdit className="text-blue-500 w-6 h-6 cursor-pointer" />
                        <RiDeleteBin6Line className="text-red-500 w-6 h-6 cursor-pointer" />
                        <PiBarcode className="text-black w-6 h-6 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Alonzo Cox
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Jan 18, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">70</p>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span
                          aria-hidden=""
                          className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                        />
                        <span className="relative">Inactive</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
                  <TbUserCircle
                    aria-hidden="true"
                    className="h-16 w-16 text-gray-300"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
              <div className="flex flex-col items-center">
                <TbUserCircle
                  aria-hidden="true"
                  className="h-32 w-32 text-gray-300"
                />
                <button
                  type="button"
                  className="mt-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, municipal: e.target.value}))}
                      required
                    />
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
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, honesty: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Honesty <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, id_Number: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      ID_Number <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, name: e.target.value}))}

                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Name <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, nationality: e.target.value}))}

                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Nationality <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, sex: e.target.value}))}

                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Sex <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, occupation: e.target.value}))}

                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Occupation <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, health_Certificate_Number: e.target.value}))}

                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Health Certificate Number{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="date"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, date_Of_issue_Of_Health_Certificate_AD: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Date Of Issue Of Health Certificate AD{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="date"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, health_Certificate_Issue_Date_Hijri: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Health Certificate Issue Date Hijiri{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="date"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, health_Certificate_ExpiryDate_Gregorian: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Health Certificate Expiry Date Gregorian{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="date"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, health_Certificate_ExpiryDate_Hijri: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Health Certificate Expiry Date Hijiri{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="date"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, Educational_Program_End_Date: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Educational Program End Date{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, type_Of_Educational_Program: e.target.value}))}

                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Type Of Educational Program{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, facility_Name: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      Facility Name <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="text"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, license_Number: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
                      className="absolute text-sm font-medium text-gray-900 -top-2.5 left-2.5 bg-white px-1"
                    >
                      License Number{" "}
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3 relative">
                    <input
                      type="Number"
                      name="municipal"
                      id="municipal"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder=" "
                      onChange={(e)=>setStudent((state)=>({ ...state, facility_Number: e.target.value}))}
                      required
                    />
                    <label
                      htmlFor="municipal"
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
              <button className="text-white ml-9 bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
