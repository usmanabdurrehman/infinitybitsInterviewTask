import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer1 from '../Footer1/Footer1'
import Footer2 from '../Footer2/Footer2'
import CartSection from '../CartSection/CartSection'
import './ShoppingCart.css'

let ShoppingCart = () => {
	return(
		<div className='shoppingcart'>
			<Navbar/>
			<div className='container'>
				<CartSection/>
			</div>
			<Footer1/>
			<Footer2/>
		</div>
		)
}

export default ShoppingCart