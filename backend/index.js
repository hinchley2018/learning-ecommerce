//grab config from .env or env vars
import { config } from 'dotenv';
config();

// Import dependencies
import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';
import { connectToDatabase } from './db-connection.js';
import productRoutes from './routes/productRoutes.js';

// Create an Express application
const app = express();

await connectToDatabase();

// Define routes
// Define Swagger Documentation route
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Define products route
app.use('/products', productRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
