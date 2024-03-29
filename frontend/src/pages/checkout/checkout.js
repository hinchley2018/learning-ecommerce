export default function Checkout() {
    return (
      <div data-testid='checkout'>
        <div className='bg-blue-800 p-5 text-xl text-yellow-400 '>
          Checkout!
        </div>
        <div id="outer-container" className="flex flex-row">
        <div id="detail-container" className="flex flex-col" >
          <div id="delivery">
            Delivery Details
          </div>
          <div id="product-summary">
            Product Summary
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