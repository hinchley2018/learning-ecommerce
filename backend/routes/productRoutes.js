import express from 'express';
const router = express.Router();
import { Product } from "../models/productModel.js";
//GET /products
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

export default router