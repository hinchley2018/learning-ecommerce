import { mongoose } from "mongoose"
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
})

const Product = model("Product", productSchema);

export { Product }