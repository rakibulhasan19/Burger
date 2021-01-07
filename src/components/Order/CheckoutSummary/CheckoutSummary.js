import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'
import "./CheckoutSummary.css"
const CheckoutSummary = props =>{
    return(
        <div className="CheckoutSummary">
            <h1>We hope it testes well !</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingradient={props.ingradient}
                   
                />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary;