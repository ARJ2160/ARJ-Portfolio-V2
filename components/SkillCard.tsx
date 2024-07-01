import Image from 'next/image';
import React from 'react';
import { SkillProps } from '../types/types';

export const SkillCard = ({
  key,
  skillName,
  skillIcon
}: SkillProps): JSX.Element => {
  return (
    <div
      className='w-40 flex justify-center items-center flex-col mx-auto text-center p-4 rounded-xl border-2 bg-[#CCD6F6] text-black border-gray-300'
      key={key}
    >
      <Image
        width={skillIcon?.width}
        height={skillIcon?.height}
        src={skillIcon}
        className='w-16 h-16'
        alt=''
      />
      <div className='text-xl mt-5'>{skillName}</div>
    </div>
  );
};
