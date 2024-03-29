import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Footer,
  SocialMedia
} from '../components/index';
import sunSvg from '../images/lightMode.svg';
import moonSvg from '../images/darkMode.svg';
import useDarkMode from '../hooks/useDarkMode';
import Image from 'next/image';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [colorTheme, setTheme]: any = useDarkMode();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <div className='min-h-screen py-10 px-3 sm:px-5 dark:bg-backgroundBlue dark:text-white bg-white text-black relative'>
        <div data-aos='fade-down' data-aos-duration='600'>
          <Hero />
        </div>
        <div data-aos='fade-up' data-aos-duration='500' data-aos-delay='300'>
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
        {colorTheme === 'light' ? (
          <span className='fixed top-24 md:right-[2.7rem] right-5 select-none'>
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
          <span className='fixed top-24 md:right-[2.7rem] right-5 select-none'>
            <Image
              src={moonSvg}
              width={30}
              height={30}
              alt='Toggle theme'
              className='cursor-pointer'
              onClick={() => setTheme(colorTheme)}
            />
          </span>
        )}
        <SocialMedia />
      </div>
    </>
  );
};

export default Home;
