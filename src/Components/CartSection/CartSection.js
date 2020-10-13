import React,{useState} from 'react'
import './CartSection.css'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

	let [shoppingCart,setShoppingCart] = useState((localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')):[])

	let deleteHandler = (id) => {
		console.log('In delete handler')
		let tempshoppingcart = JSON.parse(localStorage.getItem('cart'))
		tempshoppingcart = tempshoppingcart.filter(item=>item.id!=id)
		localStorage.setItem('cart',JSON.stringify(tempshoppingcart))
		setShoppingCart(tempshoppingcart)
		console.log(shoppingCart)
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
								<div className='smolgrid'>
									<div>Item</div>
									<div><img src='image/cartImage.jpg'/></div>
									<div>Name</div>
									<div>{item.name}</div>
									<div>Art Type</div>
									<div>{item.artType}</div>
									<div>Mat Style</div>
									<div>{item.matStyle}</div>
									<div>Frame Size</div>
									<div>{item.frameSize}</div>
									<div>Price</div>
									<div>{item.price}$</div>
								</div>
							</div>
							{/*<div className='table'>
																<TableContainer component={Paper}>
															      <Table>
															        <TableHead>
															          <TableRow>
															            <TableCell>Item</TableCell>
															            <TableCell align="right">Name</TableCell>
															            <TableCell align="right">Art Type</TableCell>
															            <TableCell align="right">Mat Style</TableCell>
															            <TableCell align="right">Frame Size</TableCell>
															            <TableCell align="right">Price</TableCell>
															          </TableRow>
															        </TableHead>
															        <TableBody>
															            <TableRow>
																            <TableCell><img src='image/cartImage.jpg'/></TableCell>
																            <TableCell align="right">{item.name}</TableCell>
																            <TableCell align="right">{item.artType}</TableCell>
																            <TableCell align="right">{item.matStyle}</TableCell>
																            <TableCell align="right">{item.frameSize}</TableCell>
																            <TableCell align="right">{item.price}</TableCell>
															            </TableRow>
															        </TableBody>
															      </Table>
															    </TableContainer>
															</div>*/}	
						</div>
						))}
				</div>

				<div className='checkout'>
					<div className='coupon'>
						<div>
							<div className='radio1'><StyledRadio/></div>
							<div>
								<h3><span className='radio2'><StyledRadio/></span> Attach a Gift Note</h3>
								<p>Give a personalized touch to your
								order by adding a gift note. Absolutely free
								</p>
							</div>
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