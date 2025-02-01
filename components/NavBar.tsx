import React, { JSX } from 'react';
import { data } from '../assets/data';
import { DropDown } from './DropDown';
import { ARJLogo } from './ARJLogo';

export const Navbar = ({ toggle, isOpen }: any): JSX.Element => {
  return (
    <React.Fragment>
      <nav
        className='navbar glass flex justify-between w-full h-10 py-10 items-center fixed z-10'
        role='navigation'
      >
        <div className='ml-10'>
          <a href='/#Hero'>
            <ARJLogo classNames={'w-28 h-28'} />
          </a>
        </div>
        <div
          className='px-4 cursor-pointer md:hidden burger-menu'
          onClick={toggle}
        >
          <div
            className={isOpen ? 'toggled burger burger-1' : 'burger burger-1'}
          ></div>
          <div
            className={isOpen ? 'toggled burger burger-2' : 'burger burger-2'}
          ></div>
          <div
            className={isOpen ? 'toggled burger burger-3' : 'burger burger-3'}
          ></div>
        </div>
        <div className='pr-8 md:block hidden'>
          <a href='/#About'>
            <span className='nav-link'>{data.navbar.about}</span>
          </a>
          <a href='/#Skills'>
            <span className='nav-link'>{data.navbar.skills}</span>
          </a>
          <a href='/#Projects'>
            <span className='nav-link'>{data.navbar.projects}</span>
          </a>
          <a
            target='_blank'
            href={data.social.Resume}
            rel='noopener noreferrer'
          >
            <button className='pdf'>{data.navbar.resume}</button>
          </a>
        </div>
      </nav>
      <DropDown isOpen={isOpen} toggle={toggle} />
    </React.Fragment>
  );
};
