import React from 'react'
import Icon from '@/components/atoms/Icon';
import { SubTitle, SubText } from '@/components/atoms/Titles';

const index = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <Icon icon='material-symbols:add-card-outline' />
        <SubTitle />
        <SubText text='lorem' />
      </div>
    </div>
  );
}

export default index
