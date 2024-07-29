import React from "react";
import AdminLogin from "../Pages/Adminlogin.jsx";
import AdminHome from "../Pages/AdminHome.jsx";
import { Routes, Route } from "react-router-dom";
import UserHome from "../Pages/UserHome.jsx";
const userRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<UserHome />} />
      </Routes>
    </div>
  );
};

export default userRouter;
