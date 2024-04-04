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

/**
 * Express' built-in middleware that parses the body of an HTTP request sent to the server and tries to interpret it as a JSON object. If a request contains JSON data in the body, this middleware will extract it and make it available via req.body in subsequent routes. Required for POST and PUT methods (JSON format) (see productRoutes.js).
 */
app.use(express.json());

/**
 * Another Express middleware that parses the body of an HTTP request and interprets the data sent via URL-encoded encoding. URL-encoded encoding is a method of transmitting data in which data is encoded as key-value pairs and separated by special characters such as & and = (e.g. name=nameTest&description=descriptionTest&price=12&quantity=34). Required for POST and PUT methods (URL-encoded format) (see productRoutes.js)
 */
app.use(express.urlencoded({ extended: true }));

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
