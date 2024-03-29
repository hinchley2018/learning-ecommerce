import React, { useState } from 'react';
import Delivery from "../../components/Delivery";
import Order from "../../seed-checkout-data.json"
import OrderSummary from '../../components/OrderSummary';
import ProductSummary from '../../components/ProductSummary';

export default function Checkout() {
    const [order, setOrder] = useState(Order)
    const [tax, setTax] = useState(order.paymentAmount * .10)
    console.log(order)
    return (
      <div data-testid='checkout'>
        <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
          Checkout!
        </div>
        <div id="outer-container" className="grid grid-flow-col gap-2">
        <div id="detail-container" className="col-span-2" >
          <div id="delivery" className="App-subtitle-1">
            Delivery Details
          </div>
            <Delivery 
                customer={Order.Customer}
            />
          <div id="product-summary" className="App-subtitle-1" >
            Product Summary
            </div>
            {order.Products.map((product) => (
                <ProductSummary 
                    product={product}
                />
            ))}
      
          <div id="payment" className="App-subtitle-1">
            Payment Details
          </div>
        </div>
        <div id="order-summary-container" className="App-card">
          <div id="order-summary" className="flex flex-col App-subtitle-1">
            Order Summary
          </div>
          <OrderSummary 
            amount={order.paymentAmount}
          />
        </div>
        </div>
      </div>
    );
  }