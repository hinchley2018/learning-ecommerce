import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../pages/cart/cart';
export function Product({ product }) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = ({ product }) => {
    const { id, imageUrl, description, stock, price, name } = Cart;
  };

  /*
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: quantity
    };
    addToCart(cartItem);
  };
  */

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value)); // Convert input value to integer
  };

  return (
    <div key={product.id}>
      <b>Product #: {product.id}</b>
      <p>
        <b>Name: {product.name}</b>
      </p>
      <img
        src={product.imageUrl}
        alt={product.description}
        style={{
          maxWidth: '100%',
          maxHeight: '150px',
          borderRadius: '10px',
        }}
      />
      <p>{product.description}</p>
      <b>
        Price: ${product.price.toFixed(2)}
        <br></br>
      </b>
      <b>Order quantity: </b>
      <input
        style={{ width: '40px' }}
        type='number'
        value={quantity}
        onChange={handleChange}
        min='1'
        max={product.stock} // Set maximum quantity to available stock
      />
      <br></br>
      <div class='my-2'>
        <NavLink
          to='/cart'
          onClick={() =>
            addToCart()(
              product.name,
              product.id,
              product.description,
              product.imageUrl,
              product.price,
              product.quantity,
            )
          }
        >
          <button className='rounded-xl bg-blue-600 p-5 text-xl text-yellow-400 hover:bg-blue-800'>
            Add to Cart
          </button>
        </NavLink>
      </div>
      <p className='text-red-600'>
        <b>Button not working yet</b>
      </p>
    </div>
  );
}
