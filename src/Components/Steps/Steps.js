import React from 'react'
import './Steps.css'
import Button from '../Button/Button'
import BackupIcon from '@material-ui/icons/Backup';

let Steps = () => {
	return(
		<div className='steps'>
			<h2>Custom Framing Steps</h2>
			<div className='line'></div>
			<p>True Custom Framing Made Truly Simple</p>
			<div className='stepnumbers'>
				<div><div className='num1'>1</div></div>
				<div></div>
				<div><div className='num2'>2</div></div>
				<div></div>
				<div><div className='num3'>3</div></div>
			</div>
			<div className='actualsteps'>
				<div>
					<div className='diamond1'>
						<div>
							<img src="image/frame.png"/>
							<p>Range of custom framing choices</p>
						</div>	
					</div>
					<p>Select Your Frame</p>	
				</div>
				<div className='arrowDiv'><img src='image/next-1.png'/></div>
				<div>
					<div className='diamond2'>
						<div>
							<img src='image/price-icon.png'/>
							<p>Upload your image or
							photo</p>
						</div>
					</div>	
					<p>Upload Your artwork or photo 
					and send</p>
				</div>
				<div className='arrowDiv'><img src='image/next.png'/></div>
				<div>
					<div className='diamond3'>
						<div>
							<img src="image/free-shipping-icon.png"/>
							<p>Prepared frame is 
							shipped</p>
						</div>	
					</div>	
					<p>We build custom frame and ship
					to you</p>
				</div>
			</div>
			<Button marginTop='20px' width="280px" borderAll={true} main={true} text="START FRAMING"/>
		</div>
		)
}

export default Steps