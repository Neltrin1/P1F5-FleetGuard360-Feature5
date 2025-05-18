import NavTitle from '@/components/atoms/NavTitle';
import Button from '@/components/atoms/Button';

const index = () => {
  return (
    <nav className='flex flex-row items-center justify-around bg-white shadow-md h-20 w-full'>
      <div>
        <img src='/logo.png' alt='logo' />
      </div>
      <div className='flex flex-row items-center justify-between w-1/3'>
        <NavTitle title='Home' link='/home' />
        <NavTitle title='About' link='#' />
        <NavTitle title='Contact' link='#' />
        <NavTitle title='Blog' link='#' />
        <NavTitle title='Carrers' link='#' />
      </div>
      <div>
        <Button />
      </div>
    </nav>
  );
};

export default index
