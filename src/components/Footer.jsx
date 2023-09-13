import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-[#90D4C6] py-6 px-10 text-center'>
      <div>
       <span className="mx-auto mb-10 font-Amatic text-Dark-moderate-cyan text-[30px] tablet:text-[40px]">Agustin Ibar</span>
      </div>
      <div className='flex w-[297px] place-content-between mx-auto text-Dark-moderate-cyan text-lg font-Barlow mb-[44px]'>
        <p className='hover:text-white cursor-pointer'>About</p>
        <p className='hover:text-white cursor-pointer'>Services</p>
        <p className='hover:text-white cursor-pointer'>Projects</p>
      </div>
      <div className='flex w-[164px] place-content-between mx-auto'>
      <Link to={`https://www.linkedin.com/in/agustin-ibar-59b123215/`}>
      <FaLinkedin size={32} className='fill-[#2C7566] hover:fill-white cursor-pointer'  width="20" height="20"/>      
      </Link>
      <Link to={`https://github.com/agustinibar`}>
      <FaGithub size={32} className='fill-[#2C7566] hover:fill-white cursor-pointer'  width="20" height="20"/>
      </Link>       
      </div>
    </footer>
  )
};
