import React from 'react'
import './Footer1.css'
import Button from '../Button/Button'

let Footer1 = () => {
	return(
		<div className='footer1'>
			<div className='container footer1container'>
				<div className='widerDiv'>
					<p>Get The App</p>
					{/*<div><img src=''/><img src=''/></div>*/}
					<p>Follow Us</p>
					<div>
						<img src='image/twitter-black-shape.png'/>
						<img src='image/facebook-letter-logo.png'/> 
						<img src='image/insta-icon.png'/>
					</div>
					<p>Get Inspiration</p>
					<input placeholder="Enter your email"/>
					<Button borderAll={false} width="100px" borderAll={false} main={true} text="Submit"/>
				</div>
				<div>
					<p>Framing Process</p>
					<p>Hanging Tips</p>
					<p>For Business</p>
					<p>FAQ</p>
				</div>
				<div>
					<p>About Us</p>
					<p>Gallery Wall Frame</p>
					<p>Careers</p>
					<p>Pricing</p>
				</div>
				<div>
					<p>Gift Card</p>
					<p>Contact Us</p>
				</div>
				<div>
					<p>Terms of Service</p>
					<p>Privacy Policy</p>
					<p>Accessibility</p>
					<p>Sitemap</p>
				</div>
			</div>
		</div>
		)
}

export default Footer1