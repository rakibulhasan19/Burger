import React from 'react';
import './Burger.css'
import BurgerIngradient from './BurgerIngradient/BurgerIngradient'

const Burger = (props)=>{
    let transfromIngradient = Object.keys(props.ingradients)
    .map( igKey => {
        return [...Array( props.ingradients[igKey] )].map( ( _, i ) => {
            return <BurgerIngradient key={igKey + i} type={igKey} />;
        } );
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if(transfromIngradient.length === 0){
        transfromIngradient = <p>Please start adding ingradients!</p>
    }
    return(
        <div className="Burger">
            <BurgerIngradient type="bread-top"/>
            {transfromIngradient}
            <BurgerIngradient type="bread-bottom"/>

        </div>
    );
}
export default Burger; 