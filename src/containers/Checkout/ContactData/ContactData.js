import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios'
import Spinner from '../../../components/UI/Spinner/Spinner'
import "./ContactData.css"
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component{
 
    state={
      orderForm:{
        name:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Your name'
          },
          value:''
      },
        email:{
          elementType:'input',
          elementConfig:{
            type:'email',
            placeholder:'E-mail'
          },
          value:''
        },
        street:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Street '
          },
          value:''
        },
        zipCode:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Zip Code '
          },
          value:''
        },
        country:{
          elementType:'input',
          elementConfig:{
            type:'text',
            placeholder:'Country'
          },
          value:''
        },
        deliveryMethod:{
            elementType:'select',
            elementConfig:{
              options:[
                {value:'fastest',displayValue:'Fastest'},
                {value:'chepeas',displayValue:'Chepeas'}
              ]
            },
            value:''
          },
      
      },
        loading:false,
    }
    onChangedHandler = (event,identifire)=>{
      const updatedOrderForm = {...this.state.orderForm}
      const updatedFormElement = {...updatedOrderForm[identifire]}
      updatedFormElement.value= event.target.value
      updatedOrderForm[identifire] = updatedFormElement
      this.setState({orderForm:updatedOrderForm})

    }
    OrderHandler = (event)=>{
        event.preventDefault()
      this.setState({loading:true})
      const formData ={}
      for(let indentifire in this.state.orderForm){
        formData[indentifire] = this.state.orderForm[indentifire].value

      }
      const order = {
        ingradient : this.props.ingradient,
        price : this.props.price,
        orderData:formData
        }
       
      // alert('purchasing continue !')
      axios.post('/order.json',order)
      .then(response=>{
        this.setState({loading:false});
        this.props.history.push('/')
      })
      .catch(err=>{
        this.setState({loading:true});
      });
    }
    render(){
        const formElementsArray = [];
        for(let key in this.state.orderForm){
          formElementsArray.push({
            id:key,
            config:this.state.orderForm[key]
          })
        }
        let form =(
            <form>
                
              
              {formElementsArray.map(element=>(
                <Input
                  key={element.id}  
                  elementConfig={element.config.elementConfig} 
                  elementType={element.config.elementType}
                  changed={(event)=>this.onChangedHandler(event,element.id)}
                  value={element.config.value}/>
              ))}
              <Button  clicked={this.OrderHandler}btnType="Success">Order</Button>
            </form>
        );
        if(this.state.loading){
            form =<Spinner/>
        }
        return(
            <div >
                <h4>Enter your Contact Data</h4>
               {form}
            </div>
        )
    }
}

export default ContactData;