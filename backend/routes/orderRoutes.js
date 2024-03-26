import express from 'express';
const router = express.Router();
import { Order } from '../models/orderModel.js';

//Define route to get all orders
router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  });
  
export default router