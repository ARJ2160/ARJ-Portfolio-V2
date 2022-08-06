import React from 'react';
import SkillCard from './SkillCard';
import { data } from '../../assets/data';

interface SkillProps {
  id: number;
  skillName: string;
  skillIcon: {
    height: number;
    src: string;
    width: number;
  };
}

const Skills = (): JSX.Element => {
  const skills: SkillProps[] = data.skills;
  return (
    <div className='tech-stack mt-5 h-fit' data-aos='fade-up'>
      <div className='md:text-7xl sm:text-5xl text-4xl pb-5 leading-10 text-center my-10'>
        <span className='dark:text-darkOpal text-black leading-4'>
          Here&apos;s my{' '}
        </span>
        <span className='text-skyBlue'>Tech Stack</span>
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 w-fit gap-7 mx-auto mt-8'>
        {skills.map((skill: SkillProps) => (
          <SkillCard
            key={skill.id}
            id={skill.id}
            skillName={skill.skillName}
            skillIcon={skill.skillIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
// text-4xl pb-5 md:text-5xl text-center
