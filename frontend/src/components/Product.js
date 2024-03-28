import React, { useState } from 'react';
export function Product({ product, addToCart}) {
  const [quantity, setQuantity] = useState(1);

  const buttonStyle = {
    borderRadius: '10px',
  };

  const handleAddToCart = () => {
    // Create a cart item object with the product and quantity
    const cartItem = {
      product: product,
      quantity: quantity
    };
    // Call the addToCart function passed as a prop
    addToCart(cartItem);
  };

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
       <p className="inline-block mt-1 px-6 py-3 text-lg font-semibold bg-blue-500 fas fa-cart-plus text-yellow-400 rounded-x1 hover:bg-blue-700" style={buttonStyle}><button onClick={handleAddToCart}>Add to Cart</button></p>
    </div>
  );
}
