import React from 'react';
import Main from './Components/Main/Main'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import {ShoppingCartProvider} from './Context/ShoppingCartContext'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
   <div className="App">
   	<Router>
	   	<ShoppingCartProvider>
	   		<Route exact path = '/' component = {Main}/>
	   		<Route path = '/shoppingCart' component={ShoppingCart}/>
		   </ShoppingCartProvider>	
	   </Router>	   
   </div>
  );
}

export default App;
