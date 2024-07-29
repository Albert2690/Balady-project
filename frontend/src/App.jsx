
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from "./Layout/layout.jsx"
import ErrorBoundary from './Error/Errorboundary.jsx'


import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
     {/* <ErrorBoundary> */}
     <BrowserRouter>
      <Layout />
    </BrowserRouter>
      {/* </ErrorBoundary> */}

    </>

  );
}

export default App;
