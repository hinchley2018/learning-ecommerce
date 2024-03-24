import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
// import {useDispatch} from 'react-redux';
// import { getallProducts } from '../action';
import axios from 'axios';
import { createClient } from 'pexels';

export default function Product() {
  const navigate = useNavigate();
  // const disatch = useDispatch();

  const [list, setList] = useState([]);

  useEffect(() => {
    // dispatch(getallProducts());
    axios
      .get('http://localhost:3001/products')
      .then((res) => setList(res.data));
  }, []);

  let val = list.map((item) => {
    return (
      <ul>
        <li key={item.id}>
          <p>Product # :{item.id}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </li>
      </ul>
    );
  });

  return (
    <div data-testid='products'>
      <div className=' bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 p-5 text-center text-4xl'>
        <button onClick={() => navigate('/')} className='blue-500'>
          Home page
        </button>
      </div>
      <br></br>
      <div class='p-6 bg-white rounded-b-xl' data-testid='products'>
        {val}
      </div>
    </div>
  );
}
