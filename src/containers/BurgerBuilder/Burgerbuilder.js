import React, { Component } from 'react';

import Hoc from './../../hoc/Hoc';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import axios from './../../axios';
const INGRADIENT_PRICE = {
    salad:0.3,
    bacon:0.8,
    cheese:0.7,
    meat:1
}
class BurgerBuilder extends Component {
    state={
        ingradient:null,
        price:4,
        purchaseable:false,
        purchasing:false,
        loading:false,
        error:null,
    }
    componentDidMount(){
      axios.get('https://my-burger-4a661.firebaseio.com/ingradient.json')
      .then(response=>{
          this.setState({ingradient:response.data})
      }).catch(err=>{
       this.setState({error:err})
      });
    }
    purchaseHandler=()=>{
      this.setState({purchasing:true})
    }
    addIngradientBurger = (type)=>{
        const oldCount = this.state.ingradient[type];
        const UpdateCount = oldCount + 1;
        const updateIngradient = {
            ...this.state.ingradient
        }
        updateIngradient[type] = UpdateCount;
        const priceAddition = INGRADIENT_PRICE[type]
        const oldPrice = this.state.price;
        const newPrice = oldPrice + priceAddition;
        this.setState({price:newPrice,ingradient:updateIngradient});
        this.UpdatePurchaseAble(updateIngradient);

    }
    removeIngradientBurger=(type)=>{
      const oldCount = this.state.ingradient[type];
      const Updatecount = oldCount - 1;
      const updateIngradients ={
        ...this.state.ingradient
      }
      updateIngradients[type]=Updatecount;
      const priceSubstraction = INGRADIENT_PRICE[type]
      const oldPrice = this.state.price;
      const newPrice = oldPrice - priceSubstraction;
      this.setState({price:newPrice,ingradient:updateIngradients})
      this.UpdatePurchaseAble(updateIngradients);

    }
    purcheseCancelHandler=()=>{
      this.setState({purchasing:false})
    }
    purcheseContinueHandler=()=>{
      
      const queryParams = []
      for(let i in this.state.ingradient){
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingradient[i]))
      }
      queryParams.push('price='+ this.state.price);
      const queryString = queryParams.join('&');
      this.props.history.push({
        pathname:'/checkout',
        search:'?' + queryString
      })

    }
    UpdatePurchaseAble (ingradient){
      const sum = Object.keys(ingradient).map(igKey=>{
        return ingradient[igKey]
      }).reduce((sum,el)=>{
        return sum + el;
      },0);
      this.setState({purchaseable:sum > 0})
    }
  render() {
    const disableInfo = {...this.state.ingradient}
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key]<=0
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>ingradient can't be loaded!</p>:<Spinner/>;
    if(this.state.ingradient){
      burger = (
        <Hoc>
          <Burger ingradient={this.state.ingradient}/>
          <BuildControls 
            ingradientAdded = {this.addIngradientBurger}
            ingradientSubstaraction = {this.removeIngradientBurger}
            disable={disableInfo}
            price ={this.state.price}
            purchaseable = {this.state.purchaseable}
            ordered={this.purchaseHandler}
          />
        </Hoc>
      
      );
      orderSummary= <OrderSummary 
        price={this.state.price}
        purcheseContinue={this.purcheseContinueHandler}
        backdropCancel={this.purcheseCancelHandler}
        ingradient={this.state.ingradient}/>
    }
    if(this.state.loading) {
      orderSummary = <Spinner/>
    }
    return (
      <Hoc>
          <Modal show={this.state.purchasing} modalClose={this.purcheseCancelHandler} >
            {orderSummary}
          </Modal>
          {burger}
      </Hoc>
    );
  }
}

export default withErrorHandler(BurgerBuilder,axios);