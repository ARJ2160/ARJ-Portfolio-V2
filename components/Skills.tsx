import React from 'react';
import { SkillCard } from './index';
import { data } from '../assets/data';
import { SkillProps } from '../types/types';

export const Skills = (): JSX.Element => {
  const skills: SkillProps[] = data.skills;
  return (
    <div
      className='tech-stack mt-5 h-fit pt-16 md:px-24'
      data-aos='fade-up'
      id='Skills'
    >
      <div className='md:text-7xl sm:text-5xl text-4xl pb-5 leading-10 text-center my-10'>
        <span className='dark:text-darkOpal text-black leading-4'>
          Tools of{' '}
        </span>
        <span className='text-skyBlue'>Trade</span>
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 w-fit gap-7 mx-auto mt-8'>
        {skills.map((skill: SkillProps, index: number) => (
          <SkillCard
            key={index}
            skillName={skill.skillName}
            skillIcon={skill.skillIcon}
          />
        ))}
      </div>
    </div>
  );
};
