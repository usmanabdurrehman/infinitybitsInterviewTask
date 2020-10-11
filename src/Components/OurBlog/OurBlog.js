import React from 'react'
import './OurBlog.css'
import Button from '../Button/Button'

let OurBlog = () => {
	return(
		<div className='ourblog'>
			<h2>Our Blog</h2>
			<div className='line'></div>
			<p>We Offer Numerous Custom Framing Options
			Which Enable You To Create High Quality Frames In
			Simple Steps</p>
			<div className='smallgrid'>
				<div>
					<div className='image'><img src='image/600636-PMYQH2-102.png'/></div>
					<div className='description'>
						<p>Category Blog</p>
						<h3>A Very Anthropologie Holiday With
						Jodie Harrison</h3>
						<div className='flexxy'>
							<div><p>By admin</p></div>
							<div><p>30/03/2020</p></div>
						</div>
						<p>One of my favourite illustrators, dan who goes
						by the creative name of roach graphics__</p>
						<Button marginTop='15px' width="150px" borderAll={true} main={true} text="READ MORE"/>
					</div>
				</div>
				<div>
					<div className='image'><img src='image/600679-PMYQLT-805(1).png'/></div>
					<div className='description'>
						<p>Category Blog</p>
						<h3>A Very Anthropologie Holiday With
						Jodie Harrison</h3>
						<div className='flexxy'>
							<div><p>By admin</p></div>
							<div><p>30/03/2020</p></div>
						</div>
						<p>One of my favourite illustrators, dan who goes
						by the creative name of roach graphics__</p>
						<Button marginTop='15px' width="150px" borderAll={true} main={true} text="READ MORE"/>
					</div>
				</div>
			</div>
		</div>
		)
}

export default OurBlog