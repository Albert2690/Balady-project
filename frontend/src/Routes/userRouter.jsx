import React from "react";
import AdminLogin from "../Pages/Adminlogin.jsx";
import AdminHome from "../Pages/AdminHome.jsx";
import { Routes, Route } from "react-router-dom";
import UserHome from "../Pages/UserHome.jsx";
import Error404 from "../Error/Error404.jsx";
const userRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/Eservices/HealthIssue/PrintedLicenses" element={<UserHome />} />
        <Route path="/Eservices/error" element={<Error404/>}/>
      </Routes>
    </>
  );
};

export default userRouter;
