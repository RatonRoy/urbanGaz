import React from 'react';
import { Link } from 'react-router-dom';
import "./UserRoom.css";
const UserRoom = () => {
	return (
		<>
			<section className="user-room-container">
				<figure className="service-figure-container">
					<p className='services-title'> User Room  </p>
					<section className='services-title-span-container'>
						<Link to='/'
							className='services-title-span-home'
						> HOME </Link>  /
						<Link to="/gazdistribution" className='services-title-span-services'>User Room </Link>
					</section>
				</figure>
				{/* end of the  figure section. if you want to change the styles please go to the services page figure section style. */}
				<div className="user-room-boxes">
					<div className="user-room-box">
						<Link to="/">
							<button className="btn-box">
								billing Story
							</button>
						</Link>
					</div>
					{/* end of box  */}
					<div className="user-room-box">
						<Link to="/">
							<button className="btn-box">
								Cylinder Health
							</button>
						</Link>
					</div>
					{/* end of box  */}
				</div>
			</section>
		</>
	);
};
export default UserRoom;