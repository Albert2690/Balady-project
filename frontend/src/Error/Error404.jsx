import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <section className="bg-white h-screen dark:bg-white">
    <div className="py-8 px-4 mx-auto lg:mt-16 max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-teal-900 dark:text-teal-900">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-teal-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-4 text-lg  font-semibold text-teal-900 dark:text-teal-900">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
           <Link ><span className="inline-flex text-white bg-teal-900 hover:bg-teal-900 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-teal-900 my-4">Back to Homepage</span></Link> 
        </div>   
    </div>
</section>
  )
}

export default Error404