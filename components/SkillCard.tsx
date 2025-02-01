import Image from 'next/image';
import React, { JSX } from 'react';
import { SkillProps } from '../types/types';

export const SkillCard = ({
  skillName,
  skillIcon
}: SkillProps): JSX.Element => {
  return (
    <div className='w-40 flex flex-col items-center justify-center mx-auto text-center p-4 rounded-2xl shadow-lg border bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1] text-black border-gray-300 transform transition duration-300 hover:scale-105'>
      <div className='w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-md'>
        <Image
          width={skillIcon?.width}
          height={skillIcon?.height}
          src={skillIcon}
          className='w-12 h-12'
          alt={skillName}
        />
      </div>
      <div className='text-lg mt-4'>{skillName}</div>
    </div>
  );
};
