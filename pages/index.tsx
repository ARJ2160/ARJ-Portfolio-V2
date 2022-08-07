import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import About from './partials/About';
import Hero from './partials/Hero';
import Footer from './partials/Footer';
import Projects from './partials/Projects';
import Skills from './partials/Skills';
import sunSvg from '../images/lightMode.svg';
import moonSvg from '../images/darkMode.svg';
import useDarkMode from '../hooks/useDarkMode';
import { data } from '../assets/data';
import {
  FaFolder,
  FaGithub,
  FaRegEnvelope,
  FaSpotify,
  FaTwitter
} from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const [colorTheme, setTheme]: any = useDarkMode();
  const { social } = data;
  const { GitHub, LinkedIn, Twitter, Email, Spotify, Resume } = social;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className='min-h-screen py-10 px-3 sm:px-5 dark:bg-backgroundBlue dark:text-white bg-white text-black'>
      <div data-aos='fade-down' data-aos-duration='800'>
        <Hero />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
      {colorTheme === 'light' ? (
        <span className='fixed top-5 right-5 select-none'>
          <Image
            src={sunSvg}
            width={30}
            height={30}
            alt='Toggle theme'
            className='cursor-pointer'
            onClick={() => setTheme(colorTheme)}
          />
        </span>
      ) : (
        <span className='fixed top-5 right-5 select-none'>
          <Image
            src={moonSvg}
            width={30}
            height={30}
            alt='Toggle theme'
            className='cursor-pointer fixed top-5 right-5 select-none'
            onClick={() => setTheme(colorTheme)}
          />
        </span>
      )}
      <div className='social-media md:fixed md:block hidden bottom-10 left-10 z-10'>
        <ul className='social-media-list flex flex-col items-center list-none m-0 p-0'>
          <li>
            <Link href={GitHub}>
              <a
                className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 dark:text-white dark:hover:bg-gray-800 text-black hover:bg-teal-500 rounded-full transition-transform group hover:translate-y-[-5px]'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
                <span className='tooltip group-hover:scale-100'>GitHub</span>
                <span className='sr-only'>Github</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={LinkedIn}>
              <a
                className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-black rounded-full transition-transform group hover:translate-y-[-5px]'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SiLinkedin />
                <span className='tooltip group-hover:scale-100'>LinkedIn</span>
                <span className='sr-only'>LinkedIn</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={Spotify}>
              <a
                className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full transition-transform group hover:translate-y-[-5px]'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaSpotify />
                <span className='tooltip group-hover:scale-100'>Spotify</span>
                <span className='sr-only'>Spotify</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={Twitter}>
              <a
                className='text-blue-500 hover:bg-black relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 rounded-full transition-transform group hover:translate-y-[-5px]'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter />
                <span className='tooltip group-hover:scale-100'>Twitter</span>
                <span className='sr-only'>Twitter</span>
              </a>
            </Link>
          </li>
          <li>
            <Link
              href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + Email}
            >
              <a
                className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 hover:dark:text-white hover:bg-teal-500 rounded-full transition-transform group hover:translate-y-[-5px]'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaRegEnvelope />
                <span className='tooltip group-hover:scale-100'>Email</span>
                <span className='sr-only'>Email</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={Resume}>
              <a
                className='relative flex justify-center items-center text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full transition-transform group hover:translate-y-[-5px]'
                download='Professional Resume - Atharva Joshi.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFolder />
                <span className='tooltip group-hover:scale-100'>Resume</span>
                <span className='sr-only'>Resume</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='md:fixed md:block hidden right-[-35px] bottom-48 z-10 transition-all rotate-90'>
        <div className='email flex flex-row items-center'>
          <Link href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + Email}>
            <a
              target='_blank'
              className='email-link mr-10 hover:dark:text-white duration-300 dark:text-skyBlue text-black'
            >
              atharvaj2160@gmail.com
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
