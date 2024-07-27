import React from 'react'
import Footer from "../Components/Footer/Footer.jsx"
import Header from '../Components/Header/Header.jsx'
import Adminlogin from '../Pages/Adminlogin.jsx'
function layout() {
  return (
    <>
      
          <Header /> 
          <main>

 <Adminlogin/>
          </main>
      <Footer/>
    </>
  )
}

export default layout
