import React from 'react'
import './ThatsWhy.css'

let ThatsWhy = () => {
	return(
		<div className='thatswhy'>
			<h2>That's Why Our Clients Love Us</h2>
			<div className='line'></div>
			<p>Read What Our Clients Have
			To Say About Our Frames</p>
			<div className='smallgrid'>
				<div className='image'>
					<div><img src='image/2596309.png'/></div>
				</div>	
				<div className='description'>
					<h5>JEREMY COURSE</h5>
					<p>(Graphic Designer)</p>
					<p><img src="image/Group 614.png" alt=""/> I must say that Frame Boss is the best
					framing service online. They are not only affordable
					but deliver the finest quality frames within a quick
					time frame. I ordered an oversized frame of an artwork
					that they delivered with professionalism and perfection.
					Highly recommended <img src="image/Group 615.png" alt=""/>
					</p>
				</div>
			</div>
		</div>
		)
}

export default ThatsWhy