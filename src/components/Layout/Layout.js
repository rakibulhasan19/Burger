import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const Layout =(props)=>(
    <Aux>
        <div>
            <Toolbar/>
            Toolbar,SideDrawer,Backdrop
        </div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);
export default Layout;