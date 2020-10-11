import React,{useContext,useEffect} from 'react'
import './CartSection.css'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles';
import {ShoppingCartContext} from '../../Context/ShoppingCartContext'

const StyledRadio = withStyles({
  root: {
    color: 'rgb(17,45,70)',
    '&$checked': {
      color: 'rgb(17,45,70)',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

let CartSection = () => {

	let {shoppingCart,setShoppingCart} = useContext(ShoppingCartContext)

	let deleteHandler = (id) => {
		let tempshoppingcart = shoppingCart
		tempshoppingcart = tempshoppingcart.filter(item=>item.id!=id)
		setShoppingCart(tempshoppingcart)
	}

	return(
		<div className='cartsection'>
			<h2>Shopping Cart</h2>
			<div className='line'></div>
			{
				(shoppingCart.length!=0)?

				(<div>
					<div className='shopitems'>
					{
					shoppingCart.map(item=>(
						<div className='shopitem'>
							<div className='closeWrapper'><img onClick={e=>deleteHandler(item.id)} src='image/remove-btn.png'/></div>
							<div>
								<div className='headings'>
									<div>Item</div>
									<div>Name</div>
									<div>Art Type</div>
									<div>Mat Style</div>
									<div>Frame Size</div>
									<div>Price</div>
								</div>
								<div className='content'>
									<div><img src='image/cartImage.jpg'/></div>
									<div>{item.name}</div>
									<div>{item.artType}</div>
									<div>{item.matStyle}</div>
									<div>{item.frameSize}</div>
									<div>{item.price}$</div>
								</div>
							</div>	
						</div>
						))}
				</div>

				<div className='checkout'>
					<div className='coupon'>
						<div><StyledRadio/></div>
						<div>
							<h3>Attach a Gift Note</h3>
							<p>Give a personalized touch to your
							order by adding a gift note. Absolutely free
							</p>
						</div>
					</div>
					<div className='checkoutsection'>
						<div className='divwrapper'>
							<a href=""><p>Use Promotional Coupon</p></a>
							<a href=""><p>Specfic User Coupon</p></a>
							<div className='line'></div>
							<div className='totalamount'>
								<h4>Total Amount</h4>
								<h2>${shoppingCart.map(item=>item.price).reduce((prev,curr)=>prev+curr)}</h2>
							</div>
							<div className='buttons'>
								<button className='checkoutbtn'>CHECK OUT</button>
								<button className='keepshoppingbtn'>KEEP SHOPPING</button>
							</div>
						</div>	
					</div>
				</div>
			</div>
			):<div>You have 0 orders. How about Buying some frames from our awesome collection?</div>}
		</div>
		)
}

export default CartSection