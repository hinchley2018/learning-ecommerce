// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World! This is the API App');
});

// Define 'products' route
app.get('/products', (req, res) => {
  const products = [
    {
      "name": "Product 1",
      "description": "Description of product 1",
      "price": 10.99,
      "quantity": 100
    },
    {
      "name": "Product 2",
      "description": "Description of product 2",
      "price": 19.99,
      "quantity": 50
    },
    {
      "name": "Product 3",
      "description": "Description of product 3",
      "price": 29.99,
      "quantity": 30
    },
    {
      "name": "Product 4",
      "description": "Description of product 4",
      "price": 14.99,
      "quantity": 80
    },
    {
      "name": "Product 5",
      "description": "Description of product 5",
      "price": 24.99,
      "quantity": 60
    },
    {
      "name": "Product 6",
      "description": "Description of product 6",
      "price": 39.99,
      "quantity": 20
    },
    {
      "name": "Product 7",
      "description": "Description of product 7",
      "price": 49.99,
      "quantity": 10
    },
    {
      "name": "Product 8",
      "description": "Description of product 8",
      "price": 9.99,
      "quantity": 120
    },
    {
      "name": "Product 9",
      "description": "Description of product 9",
      "price": 34.99,
      "quantity": 40
    },
    {
      "name": "Product 10",
      "description": "Description of product 10",
      "price": 59.99,
      "quantity": 15
    }
  ]

  res.send(products);
})

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});