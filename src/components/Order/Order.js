import React from 'react';
import "./Order.css"
const Order =(props)=>{
    const ingradientArray=[]
    for(let ingradientName in props.ingradient){
        ingradientArray.push({
            name: ingradientName,
            amount: props.ingradient[ingradientName]
        });
    }

    const ingradientOutput = ingradientArray.map(ig=>{
        return < span style={{
            textTransform:'capitalize',display:'inline-block',margin: '0 8px',border:'1px solid #ccc',padding:'5px'
        }} key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return(
        <div className="Order">
            <p>Ingradients: {ingradientOutput}</p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
)};

export default Order;