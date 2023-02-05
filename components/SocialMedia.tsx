import React from 'react';
import { data } from '../assets/data';
import {
  FaFolder,
  FaGithub,
  FaRegEnvelope,
  FaSpotify,
  FaTwitter
} from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { SocialMediaProps } from '../types/types';

export const SocialMedia = (): JSX.Element => {
  const social: SocialMediaProps = data.social;

  return (
    <>
      <div className='md:fixed md:block hidden bottom-10 left-7 z-10'>
        <ul className='social-media-list flex flex-col items-center list-none m-0 p-0'>
          <li>
            <a
              href={social?.GitHub}
              className='social-media dark:text-white dark:hover:bg-gray-800 text-black hover:bg-teal-500 group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
              <span className='tooltip group-hover:scale-100'>GitHub</span>
              <span className='sr-only'>Github</span>
            </a>
          </li>
          <li>
            <a
              href={social?.LinkedIn}
              className='social-media text-blue-700 hover:bg-black group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiLinkedin />
              <span className='tooltip group-hover:scale-100'>LinkedIn</span>
              <span className='sr-only'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href={social?.Spotify}
              className='social-media text-teal-500 hover:bg-black group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaSpotify />
              <span className='tooltip group-hover:scale-100'>Spotify</span>
              <span className='sr-only'>Spotify</span>
            </a>
          </li>
          <li>
            <a
              href={social?.Twitter}
              className='text-blue-500 hover:bg-black social-media group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
              <span className='tooltip group-hover:scale-100'>Twitter</span>
              <span className='sr-only'>Twitter</span>
            </a>
          </li>
          <li>
            <a
              href={
                'https://mail.google.com/mail/?view=cm&fs=1&to=' + social?.Email
              }
              className='social-media hover:dark:text-white hover:bg-teal-500 group'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaRegEnvelope />
              <span className='tooltip group-hover:scale-100'>Email</span>
              <span className='sr-only'>Email</span>
            </a>
          </li>
          <li>
            <a
              href={social?.Resume}
              className='social-media text-teal-500 hover:bg-black group'
              download='Professional Resume - Atharva Joshi.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFolder />
              <span className='tooltip group-hover:scale-100'>Resume</span>
              <span className='sr-only'>Resume</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='md:fixed md:block hidden right-[-55px] bottom-48 z-10 transition-all rotate-90'>
        <div className='email flex flex-row items-center'>
          <a
            href={
              'https://mail.google.com/mail/?view=cm&fs=1&to=' + social?.Email
            }
            target='_blank'
            className='email-link mr-10 hover:dark:text-white duration-300 dark:text-opal text-black'
            rel='noopener noreferrer'
          >
            {data.social.Email}
          </a>
        </div>
      </div>
    </>
  );
};
