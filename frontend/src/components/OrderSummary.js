import React, { useState, useEffect } from 'react';
export default function OrderSummary({ amount }){
const [tax, setTax] = useState(0)
const [total, setTotal] = useState(amount)

    return(
        <div>
            <div style={{marginLeft:"1rem"}}>
                <div>Subtotal: ${amount}</div>
                <div>Tax: ${tax}</div>
                <div className="App-subtitle-2">Total: ${total}</div>
          </div>
        </div>
    )
}
