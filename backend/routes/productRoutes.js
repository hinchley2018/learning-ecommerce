import express from 'express';
import  {getProducts} from "../controller/products-controller.js";
import { Product } from "../models/productModel.js";
const router = express.Router();
//GET /products
// router.get('/', async (req, res) => {
//     let products = await Product.find({});
//     res.send(json(products));
// });

router.get("/" ,getProducts);

export default router