import React,{useState,useEffect} from "react";
import "./Navbar.css";
import { IconButton } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components'

const StyledBadge = withStyles((theme) => ({
	badge: {
		top: "100%",
		padding: "0 4px",
		background: "rgb(17,45,70)",
		fontSize: "12px",
	},
}))(Badge);

let Navbar = () => {
	let [shoppingCart,setShoppingCart] = useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[])

	// useEffect(()=>{
	// 	setShoppingCart(JSON.parse(localStorage.getItem('cart')))
	// },[JSON.parse(localStorage.getItem('cart'))])

	let clickHandler = () => {
		console.log('I got clicked homie')
	}

	return (
		<div className="navbar">
			<div className="navcontainer container">
				<div className="logo">
					<h2>
						<Link to="/">index.</Link>
					</h2>
				</div>
				<div className="menu">
					<div className="text dropdown">
						<div className='flexxxy'>
							SERVICES <KeyboardArrowDownIcon />
						</div>
						<div class="dropdowncontent">
							<a href="#">Social Media Framing</a>
							<a href="#">Diploma Framing</a>
							<a href="#">Jersey Framing</a>
							<a href="#">Canvas Framing</a>
							<a href="#">Wedding Framing</a>
							<a href="#">Gallery Wall Framing</a>
							<a href="#">Business Framing</a>
							<a href="#">Artistic and Vendor Framing</a>
							<a href="#">Gift Framing</a>
						</div>
					</div>
					<div className="text dropdown">
						<div className='flexxxy'>
							FRAMES <KeyboardArrowDownIcon />
						</div>
						<div class="dropdowncontent">
							<a href="#">Our Frames</a>
							<a href="#">What We Frame</a>					
						</div>	
					</div>
					<div className="text">BLOG</div>
					<div className="text">CONTACT US</div>
					<div className="text">GIFTS</div>
					<div>
						<PermIdentityIcon />
					</div>
					<div>
						<StyledBadge
							badgeContent={shoppingCart.length}
							color="primary"
						>
							<Link to="/shoppingCart">
								<ShoppingBasketIcon />
							</Link>
						</StyledBadge>
					</div>
					<div className='hamburgermenu'>
						<MenuIcon className='hamburger'/>
						<div className='sidebar'>
							<div className="text dropdown">
								<div className='flexxxy'>
									SERVICES <KeyboardArrowDownIcon />
								</div>
								<div class="dropdowncontent">
									<a href="#">Social Media Framing</a>
									<a href="#">Diploma Framing</a>
									<a href="#">Jersey Framing</a>
									<a href="#">Canvas Framing</a>
									<a href="#">Wedding Framing</a>
									<a href="#">Gallery Wall Framing</a>
									<a href="#">Business Framing</a>
									<a href="#">Artistic and Vendor Framing</a>
									<a href="#">Gift Framing</a>
								</div>
							</div>
							<div className="text dropdown">
								<div className='flexxxy'>
									FRAMES <KeyboardArrowDownIcon />
								</div>
								<div class="dropdowncontent">
									<a href="#">Our Frames</a>
									<a href="#">What We Frame</a>					
								</div>	
							</div>
							<div className="text">BLOG</div>
							<div className="text">CONTACT US</div>
							<div className="text">GIFTS</div>
							<div>
								<PermIdentityIcon />
							</div>
							<div>
								<StyledBadge
									badgeContent={shoppingCart.length}
									color="primary"
								>
									<Link to="/shoppingCart">
										<ShoppingBasketIcon />
									</Link>
								</StyledBadge>
							</div>
						</div>
					</div>
					<div className='sidebar'>
						<div className="text dropdown">
							<div className='flexxxy'>
								SERVICES <KeyboardArrowDownIcon />
							</div>
							<div class="dropdowncontent">
								<a href="#">Social Media Framing</a>
								<a href="#">Diploma Framing</a>
								<a href="#">Jersey Framing</a>
								<a href="#">Canvas Framing</a>
								<a href="#">Wedding Framing</a>
								<a href="#">Gallery Wall Framing</a>
								<a href="#">Business Framing</a>
								<a href="#">Artistic and Vendor Framing</a>
								<a href="#">Gift Framing</a>
							</div>
						</div>
						<div className="text dropdown">
							<div className='flexxxy'>
								FRAMES <KeyboardArrowDownIcon />
							</div>
							<div class="dropdowncontent">
								<a href="#">Our Frames</a>
								<a href="#">What We Frame</a>					
							</div>	
						</div>
						<div className="text">BLOG</div>
						<div className="text">CONTACT US</div>
						<div className="text">GIFTS</div>
						<div>
							<PermIdentityIcon />
						</div>
						<div>
							<StyledBadge
								badgeContent={shoppingCart.length}
								color="primary"
							>
								<Link to="/shoppingCart">
									<ShoppingBasketIcon />
								</Link>
							</StyledBadge>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
