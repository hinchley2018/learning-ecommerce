import express from 'express';
const router = express.Router();
import { Product } from '../models/productModel.js';

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve all products from the database
 *     description: Retrieve all products from the database. Can be used to populate our product page.
 *     responses:
 *      200:
 *        description: a list of products
 *        content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         productName:
 *           type: string
 *           description: The name of the product.
 *           example: "Sleek Wireless Mouse"
 *         productDescription:
 *           type: string
 *           description: The description of the product.
 *           example: "Experience precision and comfort with our sleek wireless mouse."
 *         productPrice:
 *           type: number
 *           description: The price of the product.
 *           example: 99.99
 *         productQuantity:
 *           type: number
 *           description: The quantity of the product.
 *           example: 100
 */
router.get('/', async (req, res) => {
  let products = await Product.find();
  res.send(products);
});

export default router;
