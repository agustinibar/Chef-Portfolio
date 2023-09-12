import { Nav } from './Nav';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8'>
      <div className='flex h-6 place-content-between m-auto sm:h-14 items-center'>
        <NavLink to={`/`}>
        <span className="font-Amatic text-white text-[30px] tablet:text-[40px]">Agustin Ibar</span>
        </NavLink>
        <Nav />
      </div>
    </header>
  )
};


