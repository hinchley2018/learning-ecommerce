//icons
import { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  return (
    <div data-testid='navbar'>
      {/* large screens */}
      <div className='hidden items-center justify-between bg-[#1c1716] p-5 text-white md:grid md:grid-flow-col md:gap-x-5'>
        {/* website logo */}
        <div
          onClick={() => navigate('/')}
          className='text-xl font-bold transition-all delay-75 hover:cursor-pointer hover:text-yellow-400 md:text-4xl'
        >
          WebsiteLogo
        </div>

        <div className='grid grid-flow-col items-center justify-center gap-x-4'>
          {/* search bar and search button */}
          <div className='relative'>
            <form className='relative'>
              <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full rounded-full px-3 py-2 text-black'
              ></input>
            </form>
            <button
              onClick={() => navigate('/cart')}
              className='absolute right-0 top-1/2 -translate-y-1/2 items-center rounded-full bg-orange-400 p-3 text-black'
            >
              <FaSearch />
            </button>
          </div>
          {/* products links */}
          <button
            className='transition-all delay-75 hover:text-red-500'
            onClick={() => navigate('/products')}
          >
            Products
          </button>
          {/* cart link */}
          <button
            className='text-xl hover:text-red-500'
            href='/cart'
            onClick={() => navigate('/cart')}
            name='cart'
            data-testid='cart'
          >
            <BsCart2 />
          </button>
        </div>
      </div>

      {/* smaller screens */}
      <div className='grid grid-flow-row gap-4 bg-[#1c1716] p-5 text-white md:hidden'>
        {/* First Row */}
        <div className='grid grid-flow-col items-center justify-between '>
          {/* website logo */}
          <div
            className='text-2xl font-bold hover:cursor-pointer'
            onClick={() => navigate('/')}
          >
            WebsiteLogo
          </div>
          {/* your cart and other links */}
          <div className='grid grid-flow-col gap-x-3 px-2 text-xl'>
            <button
              className='text-sm transition-all delay-75 hover:text-red-400'
              onClick={() => navigate('/products')}
            >
              Products
            </button>
            <button
              className='transition-all  delay-75 hover:text-red-400'
              onClick={() => navigate('/cart')}
              href='/cart'
              data-testid='cart'
            >
              <BsCart2 />
            </button>
          </div>
        </div>
        {/* second row */}
        <div className='relative'>
          <form className='relative'>
            <input
              type='text'
              placeholder='Search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-full rounded-full px-3 py-2 text-black'
            ></input>
          </form>
          <button className='absolute right-0 top-0  items-center rounded-full bg-orange-400 p-3 text-black'>
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
