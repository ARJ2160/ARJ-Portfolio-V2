import Link from 'next/link';
import React from 'react';

const Navbar = ({ toggle }: any) => {
  return (
    <nav
      className='navbar glass flex justify-between w-full h-10 py-10 items-center fixed z-10'
      role='navigation'
    >
      <div>
        <Link href='/'>
          <span className='pl-8 dark:text-darkOpal text-black cursor-pointer'>
            ARJs Portfolio
          </span>
        </Link>
      </div>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
            fill='#000'
          />
        </svg>
        {/* <div className={toggled ? "toggled burger burger-1" : "burger burger-1"}></div>
        <div className={toggled ? "toggled burger burger-2" : "burger burger-1"}></div>
        <div className={toggled ? "toggled burger burger-3" : "burger burger-1"}></div> */}
      </div>
      <div className='pr-8 md:block hidden'>
        <Link href='#About'>
          <span className='nav-link'>About Me</span>
        </Link>
        <Link href='#Skills'>
          <span className='nav-link'>Skills</span>
        </Link>
        <Link href='#Projects'>
          <span className='nav-link'>Projects</span>
        </Link>
        <Link href='https://drive.google.com/file/d/19vd_SZhMVQW1FP6Bvz9hfZrI-u8XNPRK/view?usp=sharing'>
          <a target='_blank'>
            <button className='pdf'>Resume</button>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
