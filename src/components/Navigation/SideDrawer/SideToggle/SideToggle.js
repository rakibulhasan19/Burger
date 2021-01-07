import React from 'react';
import "./SideToggle.css"
const SideToggle=(props)=>(
    <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);


export default SideToggle;