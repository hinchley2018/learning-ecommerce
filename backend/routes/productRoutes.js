import express from 'express';
const router = express.Router();
import { Product } from "../models/productModel.js";
//GET /products
router.get('/', async (req, res) => {
    let products = await Product.find();
    res.send(products);
});

export default router