import Image from 'next/image';
import React from 'react';
import ARJLogo from '../public/arjLogo.png';

export const Footer = (): JSX.Element => {
  return (
    <div className='w-full text-2xl mt-20'>
      <p className='dark:text-darkOpal text-black flex justify-center items-center text-center'>
        Made by{' '}
        <a
          className='text-skyBlue hover:underline'
          href='https://github.com/ARJ2160'
          target='_blank'
          rel='noreferrer'
        >
          <Image width={300} height={300} src={ARJLogo} alt='ARJ' />
        </a>
      </p>
    </div>
  );
};
