import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGRADIENT_PRICE ={
    salad:0.5,
    meat:1.3,
    cheese:0.4,
    bacon:0.7,

}
class BurgerBuilder extends Component{
    constructor(){
        super();
        this.state={
            ingradients:{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            totalPrice: 4,
            purchaseable:false,
            purchasing:false
        }
    }
    purchasingHandler=()=>{
        this.setState({purchasing:true})
    }
    addIngradientHandler=(type)=>{
        const oldCount = this.state.ingradients[type]
        const updatedCounter = oldCount + 1;
        const updatedIngradient={
            ...this.state.ingradients
        };
        updatedIngradient[type] = updatedCounter;
        const priceAddition = INGRADIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingradients:updatedIngradient});
        this.updatePurchaseState(updatedIngradient)
    }
    removeIngradientHandler=(type)=>{
        const oldCount = this.state.ingradients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngradient = {
            ...this.state.ingradients
        };
        updatedIngradient[type] = updatedCount
        const oldPrice = this.state.totalPrice;
        const updatedPrice = INGRADIENT_PRICE[type]
        const newPrice = oldPrice - updatedPrice;
        this.setState({ingradients:updatedIngradient,totalPrice:newPrice});
        this.updatePurchaseState(updatedIngradient)

    }
    updatePurchaseState=(ingradients)=>{
        const sum = Object.keys(ingradients).map(igKey=>{
            return ingradients[igKey];
        }).reduce((sum,el)=>{
            return sum + el;
        },0)
        this.setState({purchaseable:sum > 0 })
    }
    BackdropClosedHandler=()=>{
        this.setState({purchasing:false})
    }
    ContinuneHandler=()=>{
        console.log('continue purchasing!');
    }
    render(){
        const disabledInfo = {
            ...this.state.ingradients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return(
            <Aux>
                <Modal 
                BackdropClosed={this.BackdropClosedHandler}
                show={this.state.purchasing}>
                    <OrderSummary 
                    orderContinue = {this.ContinuneHandler}
                    orderCancel={this.BackdropClosedHandler}
                    ingradients={this.state.ingradients}/>
                </Modal>
                
                <Burger ingradients={this.state.ingradients}/>
                <BuildControls 
                    ordered={this.purchasingHandler}
                    price = {this.state.totalPrice}
                    purchaseable = {this.state.purchaseable}
                    disabled={disabledInfo}
                    ingradientRemove = {this.removeIngradientHandler}
                    ingradientAdded={this.addIngradientHandler}/>
            </Aux>
          
        );
    }
}
export default BurgerBuilder;