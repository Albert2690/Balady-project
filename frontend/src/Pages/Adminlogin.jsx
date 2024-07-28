import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import apiInstance from "../Api";
import { toast } from "react-toastify";

const Adminlogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log("lllll");
      const response = await apiInstance.post("/admin/login", {
        email,
        password,
      });
      console.log(response, "response");
      if (response.data.success) {
        toast.success("Login successful!");
      } else {
        toast.error(response.data.error || "Login failed");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {/* component */}
      <div className="h-screen bg-gradient-to-br from-white-600 to-indigo-600 flex justify-center items-center w-full">
        <form onSubmit={handleLogin}>
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-6">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Login
              </h1>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute -top-3 left-2 text-gray-600 font-semibold bg-white px-1"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full mt-2"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="absolute -top-3 left-2 text-gray-600 font-semibold bg-white px-1"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full mt-2 pr-10"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button
                    type="button"
                    className="text-gray-500 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-tr from-teal-900 to-teal-900 text-indigo-100 py-2 rounded-md text-lg tracking-wide"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Adminlogin;
