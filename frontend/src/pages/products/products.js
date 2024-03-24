import { useState,useEffect } from "react";
import { Product } from "../../components/Product";
import axios from 'axios';
export default function ProductsPage() {
  const [list, setList] = useState([]);
  
  const products = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "A cup fit for a software engineer.",
      price: 4.99,
    },
  ];
  useEffect(() => {
    // dispatch(getallProducts());
    axios
      .get('http://localhost:3001/products')
      .then((res) => setList(res.data));
  }, []);


  console.log(list);
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
    <div data-testid="products-page">
      <div className="rounded-b-xl bg-white p-6" data-testid="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {val}
    </div>
  );
}
