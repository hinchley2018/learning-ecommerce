import { mongoose } from "mongoose"
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  Customer: {
    name: String,
    email: String,
    address: String
  },
  orderDate: Date,
  paymentAmount: Number,
  Products:[
    {
        productName: String,
        productAmount: Number
    }   
  ],
})

const Order = model("Order", orderSchema);

export { Order }