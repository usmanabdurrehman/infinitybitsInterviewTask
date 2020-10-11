import React, { useState, useContext } from "react";
import "./FeaturedProducts.css";
import { Redirect } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

let FeaturedProducts = () => {

	let [redirect, setRedirect] = useState(false);
	let { setShoppingCart, shoppingCart } = useContext(ShoppingCartContext);

	let clickHandler = (name) => {
		setShoppingCart([
			...shoppingCart,
			{
				id: shoppingCart.length + 1,
				name,
				artType:'Digital Photo',
				matStyle:'White',
				frameSize:'24*24',
				price:65
			},
		]);
		setRedirect(true);
	};


	let images = [{
		name:'Dover',
		url:'image/Component 114 – 1.png'
	},{
		name:'Marquette',
		url:'image/Marquette_Frame.png'
	},{
		name:'Wren',
		url:'image/041019_Product_Wren-017.png'
	},{
		name:'Mercer',
		url:'image/Yellow_Truck_Art_Black_Frame_White_Wall (1).png'
	},{
		name:'Everett',
		url:'image/070919_Product-Everett-002.png'
	},{
		name:'Mandalay',
		url:'image/Navy_Red_Abstract_Art_Gold_Bamboo_Frame_White_Wall (1).png'
	}]

	return (
		<div className="featuredproducts">
			<h2>Our Featured Products</h2>
			<div className="line"></div>
			<p>Browse Through Our Range Of Featured Products</p>
			<div className="frames">
				<div className="bigImage">
					<img src="image/3480373.png" />
				</div>
				{
					images.map(image=>(
						<div>
							<div className='imgWrapper'>
								<img src={image.url} />
								<div className='addToCart'><div onClick={e=>clickHandler(image.name)}>ADD TO CART</div></div>
							</div>
							<p>{image.name}</p>
						</div>
					))
				}
			</div>
			{(redirect==true?<Redirect to='/shoppingCart'/>:null)}
		</div>
	);
};

export default FeaturedProducts;
