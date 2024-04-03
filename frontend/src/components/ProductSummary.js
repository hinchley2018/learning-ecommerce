import React, { useState } from 'react';
export default function ProductSummary({ product }){
    return(
        <div style={{margin:"1rem"}}>
            <div id="product-summary-container" className='flex flex-row '>
                <img src={product.imageUrl} style={{maxWidth:"100%", maxHeight:"5rem"}}></img>
                <div id='product-details-container' className='flex flex-col justify-start' style={{maxHeight:'5rem', marginLeft:'.5rem'}} >
                <div className="App-subtitle-2">{product.productName}</div>
                <div className="App-small-text">Price: ${product.productAmount}</div>
                <div className="App-small-text">Quantity: {product.quantity}</div>
                </div>
            </div>
        </div>
    )
}