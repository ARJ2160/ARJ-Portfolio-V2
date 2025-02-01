import Link from 'next/link';
import React, { JSX } from 'react';
import { data } from '../assets/data';

export const DropDown = ({ isOpen, toggle }: any): JSX.Element => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center w-full mt-20 p-5 items-center fixed z-10 dark:bg-white dark:text-black bg-darkOpal origin-top transition-all'
          : 'hidden'
      }
    >
      <div className='px-4' onClick={toggle}>
        <Link href='/'>Home</Link>
      </div>
      <div className='p-4' onClick={toggle}>
        <Link href='#About'>About</Link>
      </div>
      <div className='p-4' onClick={toggle}>
        <Link href='#Skills'>Skills</Link>
      </div>
      <div className='p-4' onClick={toggle}>
        <Link href='#Projects'>Projects</Link>
      </div>
      <div className='p-4' onClick={toggle}>
        <a target='_blank' href={data.social.Resume} rel='noopener noreferrer'>
          <button className='pdf'>Resume</button>
        </a>
      </div>
    </div>
  );
};
