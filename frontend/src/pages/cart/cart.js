import React, { useState } from 'react';
export default function Cart({ product, quantity }) {
  const [cart] = useState([]);

  if (!product || !product.id) {
    return (
      <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
        This is your cart!
      </div>
    );
  }
  return (
    <div data-testid='cart'>
      <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
        This is your cart!
      </div>
      {Array.isArray(cart) &&
        cart.map((product, index) => (
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
            <input style={{ width: '40px' }} type='number' value={quantity} />
            <div data-testid='cart'>
              <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
                This is your cart!
              </div>
              <h1>{cart.product.name}</h1>
              <p>{cart.product.price}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
