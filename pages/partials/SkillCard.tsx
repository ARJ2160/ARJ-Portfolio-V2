import Image from 'next/image';
import React from 'react';
import { SkillProps } from '../../types/types';

const SkillCard = ({ id, skillName, skillIcon }: SkillProps): JSX.Element => {
  return (
    <div
      className='w-40 flex justify-center items-center flex-col mx-auto text-center p-4 rounded-xl border-2 bg-[#CCD6F6] text-black border-gray-300'
      key={id}
    >
      <span className='w-16 h-14'>
        <Image
          width={skillIcon?.width}
          height={skillIcon?.height}
          className='inline-block'
          src={skillIcon}
          alt=''
        />
      </span>
      <p className='text-xl mt-5'>{skillName}</p>
    </div>
  );
};

export default SkillCard;
