// references
// https://editor.swagger.io/
// https://swagger.io/docs/specification/basic-structure/
// https://swagger.io/specification/
// https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do
// https://swagger.io/docs/specification/components/

import swaggerJsdoc from 'swagger-jsdoc';

// Defines the high-level metadata for API documentation
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Ecommerce Website API',
    version: '1.0.0',
    description:
      'The Ecommerce API enables developers to manage products, orders, and user accounts.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'development server',
    },
  ],
  // we won't be specify the path definitions here, since each path
  // is defined separately in a jsdoc comment (compiled by swagger-jsdoc)
};

const swaggerOptions = {
  swaggerDefinition,
  // List of files to be processed.
  apis: ['./routes/*.js'],
};

// specifications/configuration settings that define the structure and behavior of the API documentation
const swaggerSpec = swaggerJsdoc(swaggerOptions);

export { swaggerSpec };
