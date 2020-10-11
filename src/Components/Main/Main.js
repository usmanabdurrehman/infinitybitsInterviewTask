import React from 'react'
import Navbar from '../Navbar/Navbar'
import Introduction from '../Introduction/Introduction'
import WhatYouWish from '../WhatYouWish/WhatYouWish'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import ImpressiveWorks from '../ImpressiveWorks/ImpressiveWorks'
import Steps from '../Steps/Steps'
import WhyChoose from '../WhyChoose/WhyChoose'
import ThatsWhy from '../ThatsWhy/ThatsWhy'
import OurBlog from '../OurBlog/OurBlog'
import Footer1 from '../Footer1/Footer1'
import Footer2 from '../Footer2/Footer2'

let Main = () => {
	return(
		<div className='main'>
			<Navbar/>
			<div className='container'>
				<Introduction/>
				<WhatYouWish/>
				<FeaturedProducts/>
				<Steps/>
				<ImpressiveWorks/>
				<WhyChoose/>
				<ThatsWhy/>
				<OurBlog/>
			</div>
			<Footer1/>
			<Footer2/>
		</div>
		)
}

export default Main