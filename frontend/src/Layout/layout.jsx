import React from 'react'
import Footer from "../Components/Footer/Footer.jsx"
import Header from '../Components/Header/Header.jsx'
import AdminRouter from '../Routes/adminRouter.jsx'
import {useLocation } from "react-router-dom";
import UserHeader from '../Components/Header/UserHeader.jsx';
import UserRouter from '../Routes/userRouter.jsx'
import AccessibilityIconButton from '../Components/SideComponent/IconComponent.jsx';
function layout() {
  const location = useLocation();
  const isUserPath = location.pathname.startsWith("/Eservices"); 
  return (
    <>
      {!isUserPath && <Header />}
      <main >{isUserPath ?
      <>
      <UserRouter />
       <AccessibilityIconButton/>
      </>
       :
    
      <AdminRouter />
       
    
      
      }</main>
      {!isUserPath && <Footer />}

    </>
   
  );
}

export default layout
