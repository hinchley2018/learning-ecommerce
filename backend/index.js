// Import the Express module
import express from 'express';
import { products } from './constants';

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World! This is the API App');
});

// Define products route
app.get('/products', (req, res) => {
  res.send(products);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
