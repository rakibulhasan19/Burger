import React from 'react';
import './Input.css'
const Input =(props)=>{
    let inputElement = null;
    let inputClasses = ["InputElement"]
    if(props.Invalid && props.shouldValidation && props.touched){
      inputClasses.push("Invalid")
    }
    switch(props.elementType){
        case('input'):
            inputElement = <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value}/>;
         break;
        case('textarea'):
            inputElement = <textarea
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value}/>;
            break;
        case('select'):
            inputElement = <select
                className={inputClasses.join(' ')}
                onChange={props.changed}
                value={props.value}>
                {props.elementConfig.options.map(op=>(
                    <option
                    key={op.value}
                    value={op.value}>{op.displayValue}</option>
                ))}
            </select>
            break;
        default:
            inputElement = <input
            className={inputClasses.join(' ')}
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>;

    }
    return(
    <div className="Input">
        <label className="Label">{props.label}</label>
        {inputElement}
    </div>
)}

export default Input;
