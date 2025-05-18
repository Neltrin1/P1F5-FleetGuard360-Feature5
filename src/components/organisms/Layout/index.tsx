import React, { ReactNode } from 'react';
import Nav from '@/components/organisms/Nav';
import NavMobile from '@/components/molecules/NavMovile';

const index = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='block lg:hidden'>
        <NavMobile />
      </div>
      <div className='hidden lg:block'>
        <Nav />
      </div>
      <div>{children}</div>
    </div>
  );
};


export default index
