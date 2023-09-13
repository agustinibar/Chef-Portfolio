import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import team from '../assets/images/leadership.jpeg';
import brochettes from '../assets/images/brochettes.png';
import donjulio from '../assets/images/donJulio.png';

const LeadershipStories = () => {
  return (
    <>
    <Header/>
    <div className='p-6 rounded-lg shadow-md text-gray-700 bg-sky-400 pt-32'>
      <h2 className="text-3xl font-bold font-Amatic mb-4">Becoming a chef</h2>
      <div className='flex grid-flow-col mb-4'>
      <img src={team} alt="TeamPhoto" className="mx-auto my-4 w-[350px] h-[300px] rounded-md"/>
      <p className="mt-12 ml-4 text-white">
        After surviving the pandemic by selling homemade pastas and sourdough bread, I had the opportunity to become a head chef for the first time. Lowell's hired me to oversee the opening of their first bar in my hometown, Zarate.

        There, I faced a new major challenge. We experienced some very tough times at the beginning, but we always managed to resolve them in the best possible way. Initially, we encountered issues with organization, training of my cooks, and coordination with other parts of the restaurant. Then, after about two or three months, we began setting economic objectives. Remember, we were still in the midst of the pandemic, and running a restaurant with all those restrictions was not easy.
      </p>
      </div>
      <p className='text-white mb-4'>
        However, we managed to overcome it, and not only that, we became the best restaurant in the franchise. Our organization was impeccable, and we never had any issues or failed an inspection, both from the company and government agencies.

        We also managed to reduce food costs by 10% in the first 4 months, achieving the highest profits in the franchise. When we were asked how we did it, we simply said that in our kitchen, "we counted every crumb."

        Nevertheless, all of this was just an introduction. The real reason for writing the earlier paragraphs is not to highlight my work but the work of my team. Those first individuals I had the privilege to lead taught me more than I could ever learn in years of study at the institute, and it was thanks to them that we were able to achieve all the goals set by the company. Of course, I had to use my persuasion and leadership skills to keep them motivated during a pandemic where challenges were around every corner—my true test.
      </p>
      <p className='text-white mb-4'>
      By the way, none of them were professionals. Jorge Luis, our supervisor, and I focused on hiring staff based on their humanity and character. Jorge taught me that a proactive, loyal, and good-hearted person mattered more than an egocentric and troublesome cook. That truly changed me as a leader, as a person, and as a chef.
      </p>
     <p className='text-white mb-4'>
        Luego de un año trabajando para Lowell’s sentí que debía seguir creciendo y ahí ya había completado todos mis objetivos, había tocado un techo. Por eso cuando surgio la oportunidad de estar a cargo de la apertura de un nuevo restaurante gourmet, sin pensarlo dos veces me adentre en la aventura. Alli cocinamos recetas simples pero con ingredientes de alta calidad y altas técnicas de cocina. Durante unos meses me encargue de capacitar a quien seria el jefe de cocina y a los cocineros, luego de que la maquina estuviera en marcha decidi comenzar a buscar nuevamente un empleo que retara mis nuevas habilidades adquiridas. 
    </p>
           
        
        <div className=' mt-8'>
        <h3 className="text-3xl font-bold font-Amatic"> The expected return:  </h3>
            <div className='flex grid-flow-col mb-4'>
                <p className='text-white " mt-14 mr-4 text-white"'>
               While I was finishing training new employees and everything was going smoothly at “Ales”, Noel, the manager of the company that owns Lowell's and other restaurants, called me. They wanted me to return but not as a chef but as an executive chef to carry out the same objectives that I had achieved as a chef de cuisine. The reason? The restaurants were having very bad recommendations, the numbers were in the red and no one could solve the problem. In addition, I had already worked for them, I knew the staff, the system and the company policies.
                It was then that I decided to accept this new challenge and that same day I got down to work, there were hours of non-stop work to manage to raise a sinking ship. After 3 months, we managed to put our numbers at zero, at least they were no longer negative and 2 months later we would manage to increase our turnover by about 2 million Argentine pesos. How do we achieve it? Constant teamwork, daily meetings, exhaustive controls, daily and monthly training of all staff. Likewise, we also had to close a sushi bar that was causing catastrophic economic losses and redistribute the staff so that no one was left without work, as well as rearrange the menus of two of the restaurants so that they adapted to the clientele.
                But the real driving force behind this plan was, however, the creation of its own Production and Distribution Center, where the raw materials arrived and recipes were prepared there and then portioned into exact grammages and distributed to the stores.

                </p>
                <img src={brochettes} alt="Brochettes" className="mx-auto my-4 w-[300px] h-[300px] rounded-md"/>
            </div>
        </div>
        <div className=' mt-8'>
        <h3 className="text-3xl font-bold font-Amatic">Don Julio and the return to Zarate:</h3>
            <div className='flex grid-flow-col mb-4'>
                <img src={donjulio} alt="DonJulio" className="mx-auto my-4 w-[400px] h-[300px] rounded-md"/>
                <p className='text-white " mt-14 ml-4 text-white"'>
                Last year I was lucky enough to be able to go to work at Don Julio, one of the best restaurants in the world according to “theworlds50best” and it was there that, chatting with the chef, he told me that although he would like me to stay working with him, if I had the opportunity to go to work in another country that did so because I had the ability and I was going to learn much more. After thinking about it for a while, I decided to return to my hometown to help my girlfriend's father open a restaurant “Ruperta” and a bakery “Barcelona” so I could spend time with my family and friends while I prepared my trip. Since then, I have heard offers from Canada and Barcelona, ​​I am doing the paperwork to be able to travel to Quebec which could happen very soon and I am still looking for better opportunities.
                </p>
            </div>
        </div>
        <div>
        <h3 className="text-3xl font-bold font-Amatic mb-0">Meanwhile…</h3>
            <div className='flex grid-flow-col mb-4'>
                <p className='text-white " mt-4 mr-4 text-white"'>
                My second passion has always been technology and that is why I am currently designing an application that will change the way gastronomic companies are managed. Recently I am working on sprint 1 but that is something that I will tell you in another section.
                </p>
            </div>
        </div>
        <Link to={`/foodiesitelab`}>
        <button className=" relative  bottom-0 bg-Soft-red text-white py-2 px-6 rounded-lg hover:bg-Yellow">
            Read "Foodie Site Lab Project" here
        </button>
        </Link>
      </div>
    <Footer/>
    </>
  );
};

export default LeadershipStories;

