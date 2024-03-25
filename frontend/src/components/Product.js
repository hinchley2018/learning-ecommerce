import React, { useState } from 'react';
export function Product({ product }) {
  const [quantity, setQuantity] = useState(1);

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
    </div>
  );
}
