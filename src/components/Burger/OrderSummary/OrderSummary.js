import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingradientSummary = Object.keys(props.ingradients)
    .map(igKey=>{
        return <li key={igKey} style={{textTransform:'capitalize'}}>
                <span>{igKey}</span>: 
                {props.ingradients[igKey]}
            </li>
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingradients:</p>
            <ul>
                {ingradientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
            <Button clicked={props.orderCancel} btnType="Danger">CANCEL</Button>
            <Button clicked={props.orderContinue} btnType="Success">CONTINUE</Button>
        </Aux>
    )
}
export default OrderSummary;