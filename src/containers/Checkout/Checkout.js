import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData'

class Checkout extends Component{
    state={
        ingradient:null,
        totalPrice: 0
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingradient = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1]
            }else{
                ingradient[param[0]] = +param[1];
            }
            
        }
        this.setState({ingradient:ingradient,totalPrice:price})
    }
    checkoutCancelledHandler = ()=>{
        this.props.history.goBack();
    }
    checkoutContinuedHandler = ()=>{
        this.props.history.replace( '/checkout/contact-data' );
    }
    render(){
        return(
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingradient={this.state.ingradient}
                    />
                   <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props)=>(<ContactData ingradient={this.state.ingradient} price={this.state.totalPrice} {...props}/>)} />
            </div>
        )
    }
}

export default Checkout;