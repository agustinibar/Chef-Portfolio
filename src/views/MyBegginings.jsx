import React from 'react';
import image1 from '../assets/images/proudDishwasher.png';
import mallorca from '../assets/images/mallorca.png'
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

const MyBegginings = () => {
  return (
    <>
    <Header/>
    <div className='p-6 rounded-lg shadow-md text-gray-700 bg-sky-400 pt-32'>
      <h2 className="text-3xl font-bold font-Amatic mb-4">My Beginnings in Gastronomy:</h2>
      <div className='flex grid-flow-col mb-4'>
      <img src={image1} alt="Chef en la cocina" className="mx-auto my-4 w-[200px] h-[200px] rounded-md" />
      <p className="mt-12 ml-4 text-white">
      My beginnings in gastronomy were in 2017. At that time, I owned a clothing store and my goal at that time was to have a bakery. That's how I entered the institute and with great perseverance I learned step by step the culinary techniques that a gastronomic professional needs.
      </p>
      </div>
      <p className='text-white mb-4'>
      It was there that this great passion was awakened, it was the heat, the pans, the speed, the tension and, above all, the unity that was generated among my comrades, which led me to feel that this was my world. I still remember the pride I felt the first time I put on a chef's jacket and walked into the kitchen. For many it doesn't symbolize anything, but for me it was truly one of the happiest moments of my life.
      </p>
      <div>
        <div className='flex grid-flow-col mb-4'>
            <p className='text-white " mt-14 mr-4 text-white"'>
                Later, I went to work at Tea Connection, a renowned franchise restaurant in Buenos Aires. Unfortunately, in that fateful year of 2020 the pandemic began, there were layoffs and I was no exception.
                To survive in those days, we met with a friend and working hard we made pasta in the kitchen of my house every morning and distributed them during noon and afternoon. Sorrentinos were our specialty.
                Luckily, in mid-2020 I got a job as a chef at “Lowell’s”, an American-style burger restaurant that had several restaurants. But I will tell that in another section.
            </p>
            <img src={mallorca} alt="Sorrentinos" className="mx-auto my-4 w-[300px] h-[300px] rounded-md"/>
        </div>
        <Link to={`/background/order-4`}>
        <button className=" relative  bottom-12 bg-Soft-red text-white py-2 px-6 rounded-lg hover:bg-Yellow">
          Read “Leadership and Human Quality here”
        </button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MyBegginings;


