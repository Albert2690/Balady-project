import React from 'react'
import AdminLogin from "../Pages/Adminlogin.jsx"
import AdminHome from '../Pages/AdminHome.jsx';
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from '../protectedRoutes/protectedRoute.jsx';
import Error404admin from '../Error/Error404admin.jsx';

function adminRouter() {
  return (
    <div>
      <Routes>

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path='/admin' element={<ProtectedRoutes/>}>
        <Route path="/admin" element={<AdminHome />} />
        
        </Route>
        <Route path='/' element={<ProtectedRoutes/>}>
        <Route path="/" element={<AdminHome />} />
        </Route>

        <Route path="/admin/*" element={<Error404admin />} />




        
        
      </Routes>
    </div>
  );
}

export default adminRouter
