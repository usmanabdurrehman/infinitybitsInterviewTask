import React from 'react'
import './Introduction.css'
import Button from '../Button/Button'

let Introduction = () => {
	return(
		<div className='introduction'>
			<div><img src='image/3480373.png'/></div>
			<div className='intro'>
				<div>
					<h2>CUSTOM FRAMES TO TELL YOUR UNIQUE STORY</h2>
					<div className='description'>
						<p>We Make It Simple, Hassle-Free And Affordable
						For You To Share Your Story With Custom Frames</p>
					</div>
					<Button width="50%" borderAll={true} main={true} text="START FRAMING"/>
				</div>
			</div>
		</div>
		)
}

export default Introduction