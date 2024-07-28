import React from 'react'
import AdminLogin from "../Pages/Adminlogin.jsx"
import AdminHome from '../Pages/AdminHome.jsx';
import { Routes, Route } from "react-router-dom";

function adminRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default adminRouter
