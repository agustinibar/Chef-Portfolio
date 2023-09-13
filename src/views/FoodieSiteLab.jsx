import React from 'react';
import { Header } from '../components/Header';;
import { Footer } from '../components/Footer';
import { NavLink } from 'react-router-dom';

export const FoodieSiteLab = () => {
  return (
    <>
    <Header/>
    <div className='p-6 rounded-lg shadow-md text-gray-700 bg-sky-400 pt-32'>
      <h2 className="text-3xl font-bold font-Amatic mb-4">FOODIE SITE LAB: </h2>
      <div className='flex grid-flow-col mb-4'>
      <p className="mt-12 text-white">
      After having traversed a short but adventurous path in the gastronomic industry and willing to continue down this same road, I have acquired interesting tools to understand the general problems that companies face when organizing their restaurants as well as generating profitable earnings.
      </p>
      </div>
      <p className='text-white mb-4'>
      That is why, encouraged by co-workers, I have decided to undertake Foodie Site Lab, a developing app that seeks to solve the major problems that this industry entails. The app in its initial launch will feature a current news section, a recipe book, an interactive section among users to generate a "Gastronomic Reddit," a "store" where stored products can be found, and a recipe cost estimator.
      </p>
      <p className='text-white mb-4'>
      Currently, the project is being developed based on a MERN stack with Typescript, due to:</p>
        <ul className='text-white'>
            <li className='mb-4 '>MongoDB: It is a highly scalable and flexible NoSQL database that allows us to store large amounts of information in JSON format. In addition, its integration with Node.js is very simple, which allows us to work more efficiently on the backend.</li>
            <li className='mb-4 '>Express.js: It is a framework for Node.js that allows us to create web applications and APIs quickly and easily. By using Express.js, we can create routes and controllers in an organized and scalable way.</li>
            <li className='mb-4 '>React.js: It is a JavaScript library for building user interfaces. React.js allows us to create reusable and easy-to-maintain components, which allows us to develop a scalable web application.</li>
            <li className='mb-4 '>Node.js: It is a JavaScript runtime environment that allows us to execute JavaScript code on the server. By using Node.js, we can work on both the frontend and backend with a single programming language.</li>
            <li className='mb-4 '>Typescript: It is a superset of JavaScript that allows us to write safer and more scalable code. By using Typescript, we can detect errors at compile time and have a better understanding of the code as the application grows.</li>
            <li className='mb-4 '>If you are interested in knowing more about me, getting to know my services, hiring me, or working with me on the project, don't hesitate! Enter the form and leave me a message so I can get in touch with you:
            <NavLink to={`/contact`}>
                <p className='cursor-pointer bg-Yellow mt-2 w-[140px] h-[56px] grid place-content-center rounded-full text-Very-dark-desaturated-blue uppercase font-Fraunces 
                tablet:bg-White tablet:hover:text-white tablet:hover:bg-opacity-25'>Contact</p>
            </NavLink>
            </li>
        </ul>
    </div>
    <Footer/>
    </>
  )
}
