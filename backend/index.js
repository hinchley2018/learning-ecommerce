//grab config from .env or env vars
import { config } from "dotenv"
config();

// Import the Express module
import express from 'express';
import { connectToDatabase } from "./connection.js";
import { getAllProducts } from "./database/schema/Product.js";

// Create an Express application
const app = express();
await connectToDatabase();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World! This is the API App');
});

// Define products route
app.get('/products', async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

