import React, { useState } from 'react';

export function Product({ product, addToCart }) {
  function ProductsPage() {
    const [cart, setCart] = useState([]);

    const addToCart = (productId) => {
      // Add the product to the cart based on productId
      setCart([...cart, productId]);
    };
  }

  import React, { useContext, useState } from 'react';

  export function Product({ product }) {
    const [quantity, setQuantity] = useState(1);

    const buttonStyle = {
      borderRadius: '10px',
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

    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = () => {
      setCart((prevCart) => [...prevCart, product]);
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
        <p
          className='fas fa-cart-plus rounded-x1 mt-1 inline-block bg-blue-500 px-6 py-3 text-lg font-semibold text-yellow-400 hover:bg-blue-700'
          style={buttonStyle}
        >
          <button>Add to Cart</button>
        </p>
        <p className='text-red-600'>
          <b>Button not working yet</b>
        </p>
        <br></br>
        <button className='rounded-xl bg-blue-600 p-5 text-yellow-400 hover:bg-blue-800'>
          Add to Cart
        </button>
      </div>
    );
  }
}
