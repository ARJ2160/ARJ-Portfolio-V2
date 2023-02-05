import React from 'react';

export const Footer = (): JSX.Element => {
  return (
    <div className='flex justify-center items-center text-center w-full text-2xl my-20'>
      <p className='dark:text-darkOpal text-black'>
        Made by{' '}
        <a
          className='text-skyBlue hover:underline'
          href='https://github.com/ARJ2160'
        >
          Atharva J
        </a>
      </p>
    </div>
  );
};
