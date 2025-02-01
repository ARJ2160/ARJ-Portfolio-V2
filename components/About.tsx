import { data } from '../assets/data';
import React, { JSX } from 'react';

export const About = (): JSX.Element => {
  return (
    <div className='background w-3/4 mx-auto min-h-max pt-20' id='About'>
      <div className='text-5xl pb-5 md:text-8xl text-center my-10'>
        <span className='dark:text-darkOpal text-black'>About</span>{' '}
        <span className='text-skyBlue'>Me</span>
      </div>
      <div className='flex flex-col justify-evenly text-lg text-left md:text-center mt-4 dark:text-opal text-black'>
        {data.about.about_me}
        <span className='dark:text-opal text-black'>{data.about.tech}</span>
        <div className='flex justify-center'>
          <ul className='skill-list'>
            {data.about.tech_list.map((tech, i) => (
              <li key={i} className='font-mono dark:text-opal text-black'>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
