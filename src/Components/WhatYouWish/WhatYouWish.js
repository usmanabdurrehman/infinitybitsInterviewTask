import React, { useState, useContext } from "react";
import "./WhatYouWish.css";
import { Redirect } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

let WhatYouWish = () => {
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
		name:'Original Art',
		url:'image/pngfuel.com.png'
	},{
		name:'Object',
		url:'image/pngfuel.com (2)@2x.png'
	},{
		name:'Textile',
		url:'image/Group 2270.png'
	},{
		name:'Jersey',
		url:'image/Group 2271.png'
	},{
		name:'Photography',
		url:'image/rayyu-maldives-photographer-3327eShXUYE-unsplash.png'
	},{
		name:'Something Else',
		url:'image/Group 2273.png'
	}]

	return (
		<div className="whatyouwish">
			<h2>What You Wish To Frame?</h2>
			<div className="line"></div>
			<p>Customize Your Frame To Fit Artworks, Photos And Many More!</p>
			<div className="frames">
				{
					images.map(image=>(
						<div>
							<div className='imgWrapper' onClick={e=>clickHandler(image.name)}>
								<img src={image.url} />
								<div className='frameNow'><div>Frame Now</div></div>
							</div>
							<p>{image.name}</p>
						</div>
					))
				}
			</div>
			{redirect ? <Redirect to="/shoppingCart" /> : null}
		</div>
	);
};

export default WhatYouWish;
