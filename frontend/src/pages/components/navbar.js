//icons
import { BsCart2 } from 'react-icons/bs';

export default function Navbar() {
  return (
    <div className=' grid grid-cols-2 items-center gap-x-[60%] p-5 bg-blue-400'>
      <div className='text-4xl font-bold'><a href='/'>OurWebsiteName</a></div>
      <div className='grid grid-flow-col justify-center gap-x-4 items-center'>
        <a
          className='text-black hover:text-red-500 transition-all delay-75'
          href='/products'
        >
          OurProducts
        </a>
        <a className='hover:text-red-500' href='/cart'>
          <BsCart2 />
        </a>
      </div>
    </div>
  );
}
