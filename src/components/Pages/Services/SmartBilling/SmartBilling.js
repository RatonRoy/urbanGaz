import React from 'react';
import './SmartBilling.css';
import { Link } from 'react-router-dom';
import services09 from '../../../../assets/img/Services/SmartBilling/services09.jpg';
import services10 from '../../../../assets/img/Services/SmartBilling/services10.jpg';
import services11 from '../../../../assets/img/Services/SmartBilling/services11.jpg';
import services12 from '../../../../assets/img/Services/SmartBilling/services12.jpg';

const SmartBilling = () => {
	return (
		<>
		 	<main className="services-container-wrapper">
				<figure className="service-figure-container">
					<p className='services-title'> Smart Billing </p>
					<section className='services-title-span-container'>
						<Link to='/'
							className='services-title-span-home'
						> HOME </Link>  /
						<Link to="/services/schedulemaintenance" className='services-title-span-services'>Smart Billing </Link>
					</section>
				</figure>
				{/* end of the figure section */}
				<div className="all-services-container-wrap">
					{/* single services container */}
					<section className="single-services-container">
						{/* img container */}
						<div className="services-img-container">
							<img src={services09} alt="services images" />
							<p className="service-img-caption">
								<span className="caption-title">
									Figure : 
								</span>
								<span className='caption-info'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</span>
							</p>
						</div>
						{/* services img container */}
						<article className='services-info-container'>
							<h3 className="single-services-title"> Services Title </h3>
							<p className="single-services-info">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit ad necessitatibus impedit est? Omnis, iusto voluptas neque eum deleniti commodi tenetur mollitia cumque earum nihil eos unde nulla modi dolorem nemo officiis quidem recusandae minima quasi beatae molestias dicta enim officia nesciunt. Commodi voluptatem nostrum excepturi aliquid labore corporis?
							</p>
						</article>
					</section>
					{/* end of the single services container */}
					{/* single services container */}
					<section className="single-services-container">
						{/* img container */}
						<div className="services-img-container img-two services-img-order">
							<img src={services10} alt="services images" />
							<p className="service-img-caption">
								<span className="caption-title">
									Figure : 
								</span>
								<span className='caption-info'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</span>
							</p>
						</div>
						<article className='services-info-container services-info-order'>
							<h3 className="single-services-title"> Services Title </h3>
							<p className="single-services-info">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit ad necessitatibus impedit est? Omnis, iusto voluptas neque eum deleniti commodi tenetur mollitia cumque earum nihil eos unde nulla modi dolorem nemo officiis quidem recusandae minima quasi beatae molestias dicta enim officia nesciunt. Commodi voluptatem nostrum excepturi aliquid labore corporis?
							</p>
						</article>
					</section>
					{/* end of the single services container */}
					{/* single services container */}
					<section className="single-services-container">
						{/* img container */}
						<div className="services-img-container">
							<img src={services11} alt="services images" />
							<p className="service-img-caption">
								<span className="caption-title">
									Figure : 
								</span>
								<span className='caption-info'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</span>
							</p>
						</div>
						{/* services img container */}
						<article className='services-info-container'>
							<h3 className="single-services-title"> Services Title </h3>
							<p className="single-services-info">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit ad necessitatibus impedit est? Omnis, iusto voluptas neque eum deleniti commodi tenetur mollitia cumque earum nihil eos unde nulla modi dolorem nemo officiis quidem recusandae minima quasi beatae molestias dicta enim officia nesciunt. Commodi voluptatem nostrum excepturi aliquid labore corporis?
							</p>
						</article>
					</section>
					{/* end of the single services container */}
					{/* single services container */}
					<section className="single-services-container">
						{/* img container */}
						<div className="services-img-container services-img-order">
							<img src={services12} alt="services images" />
							<p className="service-img-caption">
								<span className="caption-title">
									Figure : 
								</span>
								<span className='caption-info'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</span>
							</p>
						</div>
						{/* services img container */}
						<article className='services-info-container services-info-order'>
							<h3 className="single-services-title"> Services Title </h3>
							<p className="single-services-info">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit ad necessitatibus impedit est? Omnis, iusto voluptas neque eum deleniti commodi tenetur mollitia cumque earum nihil eos unde nulla modi dolorem nemo officiis quidem recusandae minima quasi beatae molestias dicta enim officia nesciunt. Commodi voluptatem nostrum excepturi aliquid labore corporis?
							</p>
						</article>
					</section>
					{/* end of the single services container */}
				</div>
			</main>
		</>
	);
};

export default SmartBilling;