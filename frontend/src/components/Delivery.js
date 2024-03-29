import React, { useState } from 'react';
export default function Delivery({ customer }){
    return(
        <div style={{marginLeft:"2rem"}}>
            <div>Name: {customer.name}</div>
            <div>Address: {customer.address}</div>
            <div>Email: {customer.email}</div>
        </div>
    )
}