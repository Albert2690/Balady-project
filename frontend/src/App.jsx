import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from "./Layout/layout.jsx"
import ErrorBoundary from './Error/Errorboundary.jsx'

function App() {

  return (
    <>
    {/* <ErrorBoundary> */}
    <Layout/>

    {/* </ErrorBoundary> */}
    </>
  );
}

export default App
