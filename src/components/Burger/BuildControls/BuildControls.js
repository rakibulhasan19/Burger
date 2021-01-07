import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import "./BuildControls.css"
const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},
    
]
const BuildControls = (props)=>(
    <div className="BuildControls">
        <p><strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>{
         return<BuildControl 
         Added={()=>props.ingradientAdded(ctrl.type)}
         remove={()=>props.ingradientSubstaraction(ctrl.type)}
         disable = {props.disable[ctrl.type]}
         key={ctrl.label} 
         label={ctrl.label}/>
        })}
        <button 
            className="OrderButton"
            disabled={!props.purchaseable}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
);
export default BuildControls;