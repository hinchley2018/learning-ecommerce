import React, { useState } from 'react';
import Delivery from "../../components/Delivery";
import Order from "../../seed-checkout-data.json"
import ProductSummary from '../../components/ProductSummary';

export default function Checkout() {
    const [order, setOrder] = useState(Order)
    console.log(order)
    return (
      <div data-testid='checkout'>
        <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
          Checkout!
        </div>
        <div id="outer-container" className="flex flex-row">
        <div id="detail-container" className="flex flex-col" >
          <div id="delivery">
            Delivery Details
            <Delivery customer={Order.Customer}/>
          </div>
          <div id="product-summary">
            Product Summary
            {order.Products.map((product) => (
                <ProductSummary 
                    product={product}
                />
            ))}
          </div>
          <div id="payment">
            Payment Details
          </div>
        </div>
        <div id="summary-container">
          <div id="order-summary" className="flex flex-col">
            Order Summary
          </div>
        </div>
        </div>
      </div>
    );
  }