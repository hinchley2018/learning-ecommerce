import React from 'react';

export default function Cart({ product, quantity, addToCart, getCartContents }) {

  if (!product || !product.id) {
    return (
      <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
        This is your cart!
      </div>
    );
  }

  const cartItem = getCartContents(product);

  const handleaddToCart = () => {
    // Call the addToCart function passed as a prop
    addToCart(cartItem);
  };

  return (
    <div data-testid='cart'>
      <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
        This is your cart!
      </div>
      <div key={cartItem.id}>
        <b>Product #: {cartItem.id}</b>
        <p>
          <b>Name: {cartItem.name}</b>
        </p>
        <img
          src={cartItem.imageUrl}
          alt={cartItem.description}
          style={{
            maxWidth: '100%',
            maxHeight: '150px',
            borderRadius: '10px',
          }}
        />
        <p>{cartItem.description}</p>
        <b>
          Price: ${cartItem.price.toFixed(2)}
          <br></br>
        </b>
        <b>Order quantity: </b>
        <input
          style={{ width: '40px' }}
          type='number'
          value={quantity}
        />
        <button onClick={handleaddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
