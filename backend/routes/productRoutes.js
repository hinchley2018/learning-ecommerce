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

// POST /products
router.post('/', async (req, res) => {
    // I pass the body of the request as an argument of the Product constructor and assign to a variable
    let product = new Product(req.body);

    try {
        /**
         * I check that the four properties of the product be not empty or null,
         * then I send the product to the db e return the product id or the whole product
         * (for the last one uncomment the res.send(product)). If you do, after this POST method,
         * the GET method you'll see the product at the last position of the list)
         */
        if(product.name != "" && product.description != "" && product.price > 0 && product.quantity > 0 ) {
            await product.save();
            res.send(product.id);
            // res.send(product);
        }else {
            res.status(400).send("The product doesn't fit the requirements needed: please check the name, the description, the price and the quantity. They should be not empty or <= 0");
        }

    }
    catch {
        res.status(500).send("An error occurred during the save of the product.");
    };
});

export default router;
