import whiteImg from '../assets/images/white-silluete-man.png'
import thomasImg from '../assets/images/image-thomas.jpg'
import jennieImg from '../assets/images/image-jennie.jpg'
import gulliImg from '../assets/images/gulli.png';

import { Testimonial } from "./Testimonial";

export const TestimonialContainer = () => {
  return (
    <section className='px-6 pt-16 desktop:pt-40 bg-white'>
      <h2 className='text-center uppercase font-Fraunces mb-16 text-Grayish-blue xl:text-xl desktop:mb-20'>Testimonials from co-workers</h2>
      <div className='lg:flex lg:w-[900px] lg:mx-auto xl:w-[1110px]'>
        <Testimonial
          img={gulliImg}
          testimonial='His ability to calmly face complex situations and solve problems efficiently is impressive.'
          name='Gulliano Medic Jaimes.'
          position='Teammate'
        />
        <Testimonial
          img={whiteImg}
          testimonial='His ability to motivate the team and his tireless efforts were essential to achieving our goals.'
          name='Joaquin Acosta'
          position='Teammate'
        />
        <Testimonial
          img={jennieImg}
          testimonial='Incredible end result! Highly recommended!'
          name='Noel Gomez'
          position='General Manager'
        />
      </div>
    </section>
  )
}
