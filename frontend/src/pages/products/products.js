import { useNavigate } from 'react-router';
import { Product } from '../../components/Product';
export default function ProductsPage() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      imageUrl:
        'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'A cup fit for a software engineer.',
      price: 4.99,
    },
  ];

  return (
    <div data-testid='products-page'>
      <div className=' bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 p-5 text-center text-4xl'>
        <button onClick={() => navigate('/')} className='blue-500'>
          Home page
        </button>
      </div>
      <br></br>
      <div className='p-6 bg-white rounded-b-xl' data-testid='products'>
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}
