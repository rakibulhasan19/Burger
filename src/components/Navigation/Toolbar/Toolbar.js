import React from 'react';
import "./Toolbar.css"
import Logo from '../../Logo/Logo';
import NavigaionItems from '../NavigationItems/NavigationItems';
import SideToggle from '../SideDrawer/SideToggle/SideToggle';

const Toolbar=(props)=>(
    <header className="Toolbar">
        <SideToggle clicked={props.DrawerToggleClicked}/>
        <div className="Logo">
        <Logo />
        </div>
       
        <nav className="DesktopOnly">
            <NavigaionItems/>
        </nav>
    </header>
)
export default Toolbar;