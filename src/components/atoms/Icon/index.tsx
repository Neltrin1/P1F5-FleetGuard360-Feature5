import React from 'react'
import { Icon } from '@iconify/react';

interface IconProps {
  icon: string;
}

const index: React.FC<IconProps> = ({ icon }) => {
  return (
    <div className='gradient rounded-full w-20 h-20 flex justify-center items-center'>
      <Icon icon={icon} width='40' height='40' className='text-white' />
    </div>
  );
}

export default index
