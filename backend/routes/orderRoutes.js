import express from 'express';
const router = express.Router();
import { Order } from '../models/orderModel.js';

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve all orders from the database
 *     description: Retrieve all orders from the database. Can be used to populate our orders page.
 *     responses:
 *      200:
 *        description: a list of orders
 *        content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                $ref: '#/components/schemas/Order'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         Customer:
 *           type: object,
 *           description: Object with customer name, email and address.,
 *           example: {name:"George", email:"george@george.com", address: "111 George St. New York, New York"}
 *         orderDate:
 *           type: date,
 *           description: The date the order was create.,
 *           example: "2024-03-14T20:00:00Z"
 *         paymentAmount:
 *           type: number,
 *           description: The total cost of the order.,
 *           example: 99.99
 *         Products:
 *           type: array,
 *           description: Array of product objects that include the productName and productAmount.,
 *           example: []
 */
//Define route to get all orders
router.get('/', async (req, res) => {
    try{
        const orders = await Order.find();
        res.send(orders).status(200);
    } catch(error) {
        console.error('error getting orders', error)
    }

  });
  
export default router