import ProjectCard from './ProjectCard';
import React from 'react';
import { data } from '../../assets/data';

interface ProjectProps {
  id: number;
  description: string;
  image: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  link: string;
  projectLink: string;
  tags: string[];
  title: string;
}

const Projects = (): JSX.Element => {
  const projects: ProjectProps[] = data.projects;
  return (
    <div className='projects flex flex-col items-center md:px-24'>
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
