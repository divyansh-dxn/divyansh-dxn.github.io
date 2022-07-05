import { ReactNode, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { SocialHandles } from './SocialHandles';

interface Props {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: Props) => (
  <Link
    className={`block hover:text-green-400 transition`}
    activeClass="active"
    smooth
    spy
    to={to}
  >
    {children}
  </Link>
);

export const NavBar = () => {
  const [visibility, setVisibility] = useState('hidden');
  const toggleVisibility = () => {
    visibility ? setVisibility('') : setVisibility('hidden');
  };

  return (
    <nav
      className={`
        sticky top-0 z-40 w-full backdrop-blur transition-all ease-out duration-500 duration-500 p-4
        lg:z-50 supports-backdrop-blur:bg-white/95`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <div
        className={`md:hidden`}
        onClick={(_e) => {
          toggleVisibility();
        }}
        id="menu-button"
      >
        {visibility === 'hidden' ? <HiMenu /> : <AiOutlineClose />}
      </div>

      <div
        className={`${visibility} w-full md:flex flex-wrap justify-between px-8 `}
        id="menu"
      >
        <ul className="text-base md:flex gap-4 md:justify-between duration-300 ease-out">
          <NavLink to={'home'}>HOME</NavLink>
          <NavLink to={'about'}>ABOUT</NavLink>
          <NavLink to={'skills'}>SKILLS</NavLink>
          <NavLink to={'projects'}>PROJECTS</NavLink>
          <NavLink to={'experiences'}>EXPERIENCES</NavLink>
          <NavLink to={'contact'}>CONTACT ME</NavLink>
        </ul>
        <SocialHandles />
      </div>
    </nav>
  );
};
