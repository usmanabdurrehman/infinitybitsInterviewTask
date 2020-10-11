import React from 'react'
import './WhyChoose.css'
import Button from '../Button/Button'

let WhyChoose = () => {
	return(
		<div className='whychoose'>
			<div className='description'>
				<h2>Why Choose Frame Boss</h2>
				<p>
				We Promise To Provide You With 
				The Simplest And Most Affordable
				Way To Design Custom Frames With
				Care!
				</p>
				<div className='smallgrid'>
					<div>
						<div className='imgDiv'><img src='image/free-shipping-icon.png'/></div>
						<div>
							<h4>Ready To Use</h4>
							<p>
							We deliver ready to use frames
							built by hand shipped for free
							at your doorstep
							</p>
						</div>
					</div>
					<div>
						<div className='imgDiv'><img src='image/designer-advice-icon.png'/></div>
						<div>
							<h4>Enjoy Free Advice</h4>
							<p>
							Enjoy free online design advice
							from our creative team for custom 
							framing
							</p>
						</div>
					</div>
					<div>
						<div className='imgDiv'><img src='image/price-icon.png'/></div>
						<div>
							<h4>Lowest Price Guarantee</h4>
							<p>
							We guarantee to deliver you the 
							lowest price for high quality, unique
							framing
							</p>
						</div>
					</div>
					<div>
						<div className='imgDiv'><img src='image/free-return-icon.png'/></div>
						<div>
							<h4>Free Returns</h4>
							<p>
							Don't like your custom frame?
							We offer free returns and make
							frame that satisfies you
							</p>
						</div>
					</div>
				</div>
				<Button marginTop='20px' width="300px" borderAll={true} main={true} text="START FRAMING"/>
			</div>
			<div className='image'>
				<div><img src='image/600636-PMYQH2-102.png'/></div>
			</div>	
		</div>
		)
}

export default WhyChoose