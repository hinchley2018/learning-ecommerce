
import { useNavigate } from 'react-router';



export default function Product() {
  const navigate = useNavigate();
  

  return (
    <div data-testid='products'>
      <div className=' bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 p-5 text-center text-4xl'>
        <button onClick={() => navigate('/')} className='blue-500'>
          Home pagedsdssd
        </button>
      </div>
      <br></br>
      <div class='p-6 bg-white rounded-b-xl' data-testid='products'>
          <button onClick={() => navigate('/products')} className='blue-500'>
         Our Products
        </button>
      </div>
    </div>
  );
}
