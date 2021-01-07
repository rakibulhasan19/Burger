import React,{Component} from 'react';
import Hoc from '../../hoc/Hoc';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import "./Layout.css"
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerCloseHandler =()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render(){
        return(
            <Hoc>
                <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    DrawerToggleClicked={this.sideDrawerToggleHandler}
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Hoc>
        )
    }
}


export default Layout;

