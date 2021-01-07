import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';

import "./SideDrawer.css"
import Backdrop from '../../UI/Backdrop/Backdrop';
import Hoc from '../../../hoc/Hoc';


const SideDrawer = (props)=>{
    let addClasses = ["SideDrawer","Close"];
    if(props.open){
        addClasses = ["SideDrawer","Open"];
    }
    return(
        <Hoc>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={addClasses.join(' ')}>
                <div className="Logo">
                <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Hoc>
    );
};

export default SideDrawer;