import React from 'react'
import Footer from "../Components/Footer/Footer.jsx"
import Header from '../Components/Header/Header.jsx'
import AdminRouter from '../Routes/adminRouter.jsx'
import {useLocation } from "react-router-dom";
import UserHeader from '../Components/Header/UserHeader.jsx';
import UserRouter from '../Routes/userRouter.jsx'
function layout() {
  const location = useLocation();
  const isUserPath = location.pathname.startsWith("/user"); // Corrected method name
  return (
    <>
      {isUserPath ? <UserHeader /> : <Header />}
      <main>{isUserPath ? <UserRouter /> : <AdminRouter />}</main>
      <Footer />
    </>
  );
}

export default layout
