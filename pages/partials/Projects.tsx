import ProjectCard from './ProjectCard';
import React from 'react';
import { data } from '../../assets/data';
import { ProjectProps } from '../../types/types';

const Projects = (): JSX.Element => {
  const projects: ProjectProps[] = data.projects;
  return (
    <div
      className='projects flex flex-col items-center md:px-24 pt-16'
      id='Projects'
    >
      <div className='md:text-7xl text-5xl pb-5 text-center my-10'>
        <span className='dark:text-darkOpal text-black leading-10'>My</span>{' '}
        <span className='text-skyBlue'>Projects</span>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
        {projects.map((project: ProjectProps, i: number) => (
          <div key={i}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
