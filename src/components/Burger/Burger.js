import React from 'react';
import "./Burger.css"
import BurgerIngradient from './BurgerIngradient/BurgerIngradient'
const Burger =(props)=>{
    let tranfromIngradient = Object.keys(props.ingradient).map(igKey=>{
        return[...Array(props.ingradient[igKey])].map((_,i)=>{
            return <BurgerIngradient key={igKey+i} type={igKey}/>

        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(tranfromIngradient.length === 0){
        tranfromIngradient = <p>Please start adding ingradient!</p>;
    }
    return(
        <div className="Burger">
            <BurgerIngradient type="bread-top"/>
            {tranfromIngradient}
            <BurgerIngradient type="bread-bottom"/>
        </div>
    )
}
export default Burger;