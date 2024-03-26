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
import orderRoutes from './routes/orderRoutes.js';
// Create an Express application
const app = express();

await connectToDatabase();

// Define routes
// Define products route
app.use('/products', productRoutes);
//Define orders route
app.use('/orders', orderRoutes)
// Define Swagger Documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
