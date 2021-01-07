import React from 'react';

import NavigaionItem from './NavigationItem/NavigationItem'
import "./NavigationItems.css"
const NavigaionItems = ()=>(
    <ul className="NavigationItems">
        <NavigaionItem exact link="/">Burger Builder</NavigaionItem>
        <NavigaionItem link="/orders">Orders</NavigaionItem>
    </ul>
)

export default NavigaionItems