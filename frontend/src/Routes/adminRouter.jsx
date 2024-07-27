import React from 'react'
import AdminLogin from "../Pages/Adminlogin.jsx"
function adminRouter() {
  return (
    <div>
      <Routes>
        <Route path="/admin/" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default adminRouter
