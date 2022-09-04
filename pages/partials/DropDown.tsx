import Link from 'next/link';
import React from 'react';

const DropDown = ({ isOpen, toggle }: any): JSX.Element => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center w-full mt-20 p-5 items-center fixed z-10 dark:bg-white dark:text-black bg-darkOpal origin-top transition-all'
          : 'hidden'
      }
      onClick={toggle}
    >
      <div className='px-4'>
        <Link href='/'>Home</Link>
      </div>
      <div className='p-4'>
        <Link href='#About'>About</Link>
      </div>
      <div className='p-4'>
        <Link href='#Skills'>Skills</Link>
      </div>
      <div className='p-4'>
        <Link href='#Projects'>Projects</Link>
      </div>
      <div className='p-4'>
        <Link href='https://drive.google.com/file/d/19vd_SZhMVQW1FP6Bvz9hfZrI-u8XNPRK/view?usp=sharing'>
          <a target='_blank'>
            <button className='pdf'>Resume</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DropDown;
