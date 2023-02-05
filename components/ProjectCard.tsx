import Image from 'next/image';
import React from 'react';
import { ProjectCardProps } from '../types/types';

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <div
      key={project?.id}
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
        <h1 className='text-2xl'>{project?.title}</h1>
        <a href={project?.link} target='_blank' rel='noopener noreferrer'>
          <p className='text-blue-600 my-2'>View Code</p>
        </a>
        <p className='py-2 text-lg'>{project?.description}</p>
        <div className='mt-4 mb-8 flex flex-wrap justify-center items-center gap-2'>
          {project?.tags.map((tag: string, i: number) => (
            <div key={i} className='px-4 py-1 border-2 rounded-full'>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
