import Image from 'next/image';
import React from 'react';
import { ProjectCardProps } from '../types/types';
import { Chips } from './index';

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <div
      className='max-w-md min-h-full bg-white text-black shadow-lg rounded-lg overflow-hidden my-4'
      data-aos='fade-up'
    >
      <a href={project?.projectLink} target='_blank' rel='noopener noreferrer'>
        <Image
          className='w-full aspect-auto object-cover object-center'
          src={project?.image}
          width={project?.image.width}
          height={project?.image.height}
          loading='lazy'
          alt='No image available'
          placeholder='blur'
          blurDataURL={project?.image?.blurDataURL}
        />
      </a>
      <div className='py-4 px-4'>
        <h1 className='text-2xl py-2'>{project?.title}</h1>
        {project?.underDevelopment && (
          <div className='flex items-center'>
            <div className='warning-icon mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-yellow-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                />
              </svg>
            </div>
            Under Development
          </div>
        )}
        <a href={project?.link} target='_blank' rel='noopener noreferrer'>
          <p className='text-blue-600 my-2'>View Code</p>
        </a>
        {project?.backendLink && (
          <a
            href={project?.backendLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-blue-600 my-2'>Backend Code</p>
          </a>
        )}
        {project.originalWebsiteLink && (
          <a
            href={project?.originalWebsiteLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-blue-600 my-2'>Original Website</p>
          </a>
        )}
        <p className='py-2 text-lg'>{project?.description}</p>
        <div className='mt-4 mb-8 flex flex-wrap justify-center items-center gap-2'>
          {project?.tags.map((tag: string, i: number) => (
            <div key={i}>
              <Chips classNames='border-2 border-gray-300'>{tag}</Chips>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
