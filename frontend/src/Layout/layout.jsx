import React from 'react'
import Footer from "../Components/Footer/Footer.jsx"
import Header from '../Components/Header/Header.jsx'
import AdminRouter from '../Routes/adminRouter.jsx'
import { BrowserRouter } from "react-router-dom";

function layout() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <AdminRouter />
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default layout
