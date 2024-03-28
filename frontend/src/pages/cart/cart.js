import React, { useState } from 'react';

export default function Cart({ product, quantity }) {
  const [cart] = useState([]);


   if (!product || !product.id) {
     return <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
       This is your cart!
            </div>;
      }
    
      return (
        <div data-testid='cart'>
          <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
            This is your cart!
          </div>
            {Array.isArray(cart) && cart.map((item, index) => (
            <div key={item.id}>
              <b>Product #: {item.id}</b>
              <p>
                <b>Name: {item.name}</b>
              </p>
              <img
                src={item.imageUrl}
                alt={item.description}
                style={{
                  maxWidth: '100%',
                  maxHeight: '150px',
                  borderRadius: '10px',
                }}
              />
              <p>{item.description}</p>
              <b>
                Price: ${item.price.toFixed(2)}
                <br></br>
              </b>
              <b>Order quantity: </b>
              <input
                style={{ width: '40px' }}
                type='number'
                value={quantity}
              />
            </div>
          ))}
        </div>
      );
    }
