import logo from '../assets/images/logo.png';

export const ContactMain = () => {
  return (
    <section className='bg-blue-500 pb-28'>
    <picture>
      <source media='(max-width:639px)' srcSet={logo} />
      <source media='(min-width:640px)' srcSet={logo} />
      <img src={logo} alt="Imagen principal"   className="mx-auto lg:w-[400px] xl:w-[600px]"/>
    </picture>
    <p className='absolute top-[350px] w-[327px] h-[827px] font-Amatic font-black text-[15px] tracking-[3.25px] text-white text-center left-0 right-0 mx-auto lg:top-[500px] lg:text-[20px]'>Hello World! If you want to know more about me, chat for a while, learn more about my services or my background. Just leave me a message and I'll get back to you!</p>
  </section>
  )
};

