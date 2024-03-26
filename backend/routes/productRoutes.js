import express from 'express';
const router = express.Router();
import { Product } from "../models/productModel.js";
//GET /products
router.get('/', async (req, res) => {
    let products = await Product.find();
    res.send(products);
});

router.post('/', (req, res) => {
    // I pass the body of the request as argument of the Product constructor and assign to a variable
    let product = new Product(req.body);

    // I send the product to the db and once the sending is ok I redirect to the same endpoint like before 
    product.save()
        .then((result) => {
            // Another option is to show the resulting item sent to the db; see the line below and uncomment it
            // res.send(product);
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
})

export default router