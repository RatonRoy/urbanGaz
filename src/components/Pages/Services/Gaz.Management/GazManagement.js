import React from 'react';
import './GazManagement.css';
import { Link } from 'react-router-dom';
import services05 from '../../../../assets/img/Services/Gaz.Management/services05.jpg';
import services06 from '../../../../assets/img/Services/Gaz.Management/services06.jpg';
import services07 from '../../../../assets/img/Services/Gaz.Management/services07.jpg';
import services08 from '../../../../assets/img/Services/Gaz.Management/services08.jpg';

const GazManagement = () => {
	return (
		<>
			
			<main className="services-container-wrapper">
				<figure className="service-figure-container">
					<p className='services-title'> Gaz Management </p>
					<section className='services-title-span-container'>
						<Link to='/'
							className='services-title-span-home'
						> HOME </Link>  /
						<Link to="/services/gazmanagement" className='services-title-span-services'>Gaz Management </Link>
					</section>
				</figure>
				{/* end of the figure section */}
				<div className="all-services-container-wrap">
					{/* single services container */}
					<section className="single-services-container">
						{/* img container */}
						<div className="services-img-container">
							<img src={services05} alt="services images" />
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
							<img src={services06} alt="services images" />
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
							<img src={services07} alt="services images" />
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
							<img src={services08} alt="services images" />
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

export default GazManagement;