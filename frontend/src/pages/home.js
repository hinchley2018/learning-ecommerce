//navigate with buttons
import { useNavigate } from 'react-router';
export default function Home() {
  const navigate = useNavigate();
  return (
    <div data-testid='home'>
      <div className='grid-rows-2 gap-x-4'>
        <button
          onClick={() => navigate('/products')}
          className='bg-purple-600 p-4 font-bold text-black '
        >
          Our Products
        </button>
        <button
          onClick={() => navigate('/cart')}
          className='bg-purple-600 p-4 font-bold text-black'
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}
