import React,{Component} from 'react';
import axios from '../../axios'
import Order from '../../components/Order/Order'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
class Orders extends Component{
    state={
        loading:true,
        orders:[]
    }
    componentDidMount(){
        axios.get('/order.json')
        .then(res=>{
            const fetchdata = []
            for(let key in res.data){
                fetchdata.push({
                    ...res.data[key],
                    id:key,
                })
            }
           
            this.setState({loading:false,orders:fetchdata})
        }).catch(err=>{
            console.log(err.message)
            this.setState({loading:true})
        });
        
    }
    render(){
        return(
            <div>
               {this.state.orders.map(order=>(
                   <Order
                        key={order.id}
                        ingradient={order.ingradient}
                        price={order.price}
                        orderData ={order.orderData}
                   />
               ))}
            </div>
        )
    }
};

export default withErrorHandler(Orders,axios);