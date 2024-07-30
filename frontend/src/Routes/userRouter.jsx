import React from "react";
import AdminLogin from "../Pages/Adminlogin.jsx";
import AdminHome from "../Pages/AdminHome.jsx";
import { Routes, Route } from "react-router-dom";
import UserHome from "../Pages/UserHome.jsx";
import Error404 from "../Error/Error404.jsx";
const userRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/user/:id" element={<UserHome />} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  );
};

export default userRouter;
