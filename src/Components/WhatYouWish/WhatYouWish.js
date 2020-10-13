import React, { useState} from "react";
import "./WhatYouWish.css";
import { Redirect } from "react-router-dom";

let WhatYouWish = () => {

	let clickHandler = (name) => {
		let shoppingCart = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
		if(shoppingCart.length==0){
			shoppingCart.push({
				id: shoppingCart.length + 1,
				name,
				artType:'Digital Photo',
				matStyle:'White',
				frameSize:'24*24',
				price:65
			})
			localStorage.setItem('cart',JSON.stringify(shoppingCart))
		}
		else if(!shoppingCart.find(item=>item.name==name)){
			shoppingCart.push({
				id: shoppingCart.length + 1,
				name,
				artType:'Digital Photo',
				matStyle:'White',
				frameSize:'24*24',
				price:65
			})
			localStorage.setItem('cart',JSON.stringify(shoppingCart))
		}
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
		</div>
	);
};

export default WhatYouWish;
