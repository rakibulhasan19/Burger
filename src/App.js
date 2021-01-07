import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/Burgerbuilder'
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends React.Component {

  render(){
  return (
    <div>
     <Layout>
        <Switch>
          <Route path="/orders" component={Orders}/>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
     </Layout>
    </div>
  );
  }
}


export default App;
