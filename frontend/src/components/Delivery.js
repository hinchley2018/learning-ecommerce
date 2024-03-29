import React, { useState } from 'react';
export default function Delivery({ customer }){
    console.log(customer)
    return(
        <div>
            <div>Name: {customer.name}</div>
            <div>Address: {customer.address}</div>
            <div>Email: {customer.email}</div>
        </div>
    )
}