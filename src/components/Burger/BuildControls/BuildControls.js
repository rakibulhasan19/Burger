import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'
const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},

]
const BuildControls = (props)=>(
    <div className="BuildControls">
        <p>Current Price:<strong> {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
            disabled={props.disabled[ctrl.type]}
            remove = {()=>props.ingradientRemove(ctrl.type)}
            added={()=>props.ingradientAdded(ctrl.type)}
            type={ctrl.type}
            key={ctrl.label} 
            label={ctrl.label}/>
 
        ))}
        <button 
            onClick={props.ordered} 
            disabled={!props.purchaseable} 
            className="OrderButton">
            ORDER NOW
        </button>
    </div>
);
export default BuildControls;