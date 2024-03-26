// require the necessary libraries/folders

import {productsNamesList, productsDescriptionsList, productsPricesList, productsQuantitiesList} from "./tempDbData.js";

import {MongoClient} from "mongodb";

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
    // Connection URL
    const uri = "mongodb://localhost:27017";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("learning-ecommerce").collection("products");

        // The drop() command destroys all data from a collection.
        collection.drop();

        // A bunch of temporary products
        let tempProducts = [];

        for (let i = 0; i < 50; i++) {
            const productName = productsNamesList[randomIntFromInterval(0, 19)];
            const productDescription = productsDescriptionsList[randomIntFromInterval(0, 19)];
            const productPrice = productsPricesList[randomIntFromInterval(0, 19)];
            const productQuantity = productsQuantitiesList[randomIntFromInterval(0, 19)];

            let product = {
                productName,
                productDescription,
                productPrice,
                productQuantity
            };
            tempProducts.push(product);
        }
        await collection.insertMany(tempProducts);

        console.log("Database seeded correctly!");
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

seedDB();