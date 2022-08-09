import Link from 'next/link';
import React from 'react';
import { data } from '../../assets/data';
import {
  FaFolder,
  FaGithub,
  FaRegEnvelope,
  FaSpotify,
  FaTwitter
} from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { SocialMediaProps } from '../../types/types';

const SocialMedia = (): JSX.Element => {
  const social: SocialMediaProps = data.social;

  return (
    <>
      <div className='social-media md:fixed md:block hidden bottom-10 left-10 z-10'>
        <ul className='social-media-list flex flex-col items-center list-none m-0 p-0'>
          <li>
            <Link href={social?.GitHub}>
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
            <Link href={social?.LinkedIn}>
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
            <Link href={social?.Spotify}>
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
            <Link href={social?.Twitter}>
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
              href={
                'https://mail.google.com/mail/?view=cm&fs=1&to=' + social?.Email
              }
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
            <Link href={social?.Resume}>
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
          <Link
            href={
              'https://mail.google.com/mail/?view=cm&fs=1&to=' + social?.Email
            }
          >
            <a
              target='_blank'
              className='email-link mr-10 hover:dark:text-white duration-300 dark:text-skyBlue text-black'
            >
              atharvaj2160@gmail.com
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
