import React, { JSX } from 'react';
import pic from '../images/Atharva_Joshi.webp';
import Typewriter from 'typewriter-effect';
import { data } from '../assets/data';
import Image from 'next/image';

export const Hero = (): JSX.Element => {
  return (
    <div
      className='w-full min-h-fit dark:text-black h-full flex justify-center flex-col items-center text-center md:px-20 py-40'
      id='Hero'
    >
      <Image
        width={pic.width}
        height={pic.height}
        src={pic}
        className='my-4 rounded-full max-w-36 max-h-36'
        alt='ARJ Image'
        priority
        data-aos='fade-up'
      />
      <div
        className='text-2xl mt-5 md:text-xl font-mono flex items-center justify-between text-center text-skyBlue'
        data-aos='fade-up'
      >
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Hi')
              .pauseFor(1000)
              .deleteAll()
              .typeString("Kon'nichiwa")
              .pauseFor(1000)
              .deleteAll()
              .typeString('Hello')
              .start();
          }}
        />
        <span className='ml-2'>my name is</span>
      </div>
      <span className='md:text-7xl text-5xl dark:text-opal text-black'>
        {data.hero.name}
      </span>
      <span className='md:text-7xl text-5xl'>
        <span className='dark:text-darkOpal text-black'>I build </span>
        <span className='text-green-500'>stuff </span>
        <span className='dark:text-darkOpal text-black'>for the web.</span>
      </span>
      <p className='sm:w-3/4 w-4/5 pt-5 md:text-lg md:text-center text-left text-base text-skyBlue'>
        {data.hero.about_me}
      </p>
    </div>
  );
};
