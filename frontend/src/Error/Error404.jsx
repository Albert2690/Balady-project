import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <section className="bg-white h-screen flex justify-center items-center dark:bg-white">
      <div className="text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-teal-900 dark:text-teal-900">404</h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-teal-900 md:text-4xl dark:text-white">Something's missing.</p>
        <p className="mb-4 text-lg font-semibold text-teal-900 dark:text-teal-900">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        
      </div>
    </section>
  );
}

export default Error404;
