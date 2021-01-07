import React, { Component } from 'react';
import Hoc from '../../../hoc/Hoc'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate')
    }
    render(){
    const IngradientSummary = Object.keys(this.props.ingradient)
        .map(igKey=>{
        return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}:</span> {this.props.ingradient[igKey]}
            </li>
            )
        });
    return(
        <Hoc>
            <h1>Your Order</h1>
            <p>A delicious burger with the following ingradient:</p>
            <ul>
                {IngradientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button clicked={this.props.backdropCancel} btnType="Danger">CANCEL</Button>
            <Button clicked ={this.props.purcheseContinue} btnType="Success" >CONTINUE</Button>
        </Hoc>
    )
}
}
export default OrderSummary;