//grab config from .env or env vars
import { config } from "dotenv"
config();
import cors from 'cors';
// Import dependencies
import express from 'express';
import { connectToDatabase } from "./db-connection.js";
import productRoutes from "./routes/productRoutes.js"
// Create an Express application
const app = express();

await connectToDatabase();
app.use(cors());

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World! This is the API App');
});

// Define products route
app.use('/products', productRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

