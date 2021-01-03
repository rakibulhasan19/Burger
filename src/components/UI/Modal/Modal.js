import React from 'react'
import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => {
    return (
        <Aux>
            <Backdrop 
            Backdrop = {props.BackdropClosed}
            show={props.show}/>
            <div 
            style={{transform:props.show ? 'translateY(0)':'translateY(-100vh)',opacity:props.show ? '1':'0'}}
            className="Modal">
                {props.children}
            </div>
        </Aux>
    )
}
export default Modal;