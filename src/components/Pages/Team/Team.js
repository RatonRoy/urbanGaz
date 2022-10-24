import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import info from '../../../assets/img/info.jpg';
import team1 from '../../../assets/img/Team/team01.jpg';
import team2 from '../../../assets/img/Team/team02.jpg';
import team3 from '../../../assets/img/Team/team03.jpg';

const Team = () => {
	return (
		<>
			{/* start of the team container  */}
			<section className="team-container-wrapper">
				{/* header of the team section color start */}

				{/* <div className="background-color-section">
					<p className='team-title'>Team </p> 
					<div className='team-title-span-container'>
						<Link to='/'
							className='team-title-span-home'
						> HOME </Link>  /
						<Link to="/team" className='team-title-span-team'>TEAM</Link>
					</div>
				</div> */}

				{/* header of the team section color end  */}
				<div className='team-info-container-wrap'>
					<div className='team-info-img-container'>
						<img src={info} alt="info image here" />
					</div>
					{/* team image container end */}

					<div className="team-info-container">
						<h3 className="team-info-title">
							Team Information
						</h3>
						<p className='team-info'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore aperiam dolor tenetur sint repudiandae obcaecati, veniam provident nulla a. Sunt optio at dolores voluptatibus. Voluptate facilis numquam, maxime labore ratione ab perspiciatis ad at quod nobis alias rem vitae? Magni ab omnis natus. Culpa harum praesentium, animi voluptatum minus cum repudiandae asperiores exercitationem labore modi quod consectetur autem non amet a dolorum libero earum vel alias assumenda nesciunt natus error nam numquam.
						</p>

					</div>
				</div>
				{/* end of the team info section */}

				{/* start of the team member info section */}
				<div className="team-members-wrapper">
					<h3 className="section-title">
						All Of The Team Members
					</h3>
					<div className="underline-wrapper">
						<div className="title-underline">

						</div>
						<div className="circle"></div>
						<div className="title-underline">

						</div>
					</div>
					{/* team members info container */}
					<div className="team-member-container">
						{/* start of the  single team member */}
						<div className="single-member-container">
							{/* <div className="single-member-img-container">
								<img src= {team1} alt="team member image" />
							</div> */}
							{/* single member info container active on hover effect */}
							<div className="single-member-info-container">
								<h4 className="member-name"> Mehedi Hasan </h4>
								<p className="designation">designation Information of team member</p>
								<div className="bottom-line"></div>
								<p className="member-education">
									Academic information of the team members
								</p>
							</div>
							{/* end of single member info container active on hover effect */}
						</div>
						{/*end of  single team member container  */}
						{/* start of the  single team member */}
						<div className="single-member-container">
							{/*  <div className="single-member-img-container">
								<img src= {team1} alt="team member image" />
							</div>
							*/}
							{/* single member info container active on hover effect */}
							<div className="single-member-info-container">
								<div className='test'>
									<h4 className="member-name">Lorem, ipsum dolor.</h4>
									<p className="designation">Lorem ipsum dolor sit amet consectetur.</p>
									<div className="bottom-line"></div>
									<p className="member-education">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab!
									</p>
								</div>
							</div>
							{/* end of single member info container active on hover effect */}
						</div>
						{/*end of  single team member container  */}
						{/* start of the  single team member */}
						<div className="single-member-container">
							{/* <div className="single-member-img-container">
								<img src= {team1} alt="team member image" />
							</div> */}
							{/* single member info container active on hover effect */}
							<div className="single-member-info-container">
								<h4 className="member-name">Lorem, ipsum dolor.</h4>
								<p className="designation">Lorem ipsum dolor sit amet consectetur.</p>
								<div className="bottom-line"></div>
								<p className="member-education">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab!
								</p>
							</div>
							{/* end of single member info container active on hover effect */}
						</div>
						{/*end of  single team member container  */}
						{/* start of the  single team member */}
						<div className="single-member-container">
							{/* <div className="single-member-img-container">
								<img src= {team1} alt="team member image" />
							</div> */}
							{/* single member info container active on hover effect */}
							<div className="single-member-info-container">
								<h4 className="member-name">Lorem, ipsum dolor.</h4>
								<p className="designation">Lorem ipsum dolor sit amet consectetur.</p>
								<div className="bottom-line"></div>
								<p className="member-education">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab!
								</p>
							</div>
							{/* end of single member info container active on hover effect */}
						</div>
						{/*end of  single team member container  */}
					</div>
					{/* team members info container end*/}
				</div>
				{/* end of the team member info section */}
				
				{/* start of the team member info section */}
				<div className="team-members-wrapper">
					<h3 className="section-title">
						All Of The Team Members
					</h3>
					<div className="underline-wrapper">
						<div className="title-underline">

						</div>
						<div className="circle"></div>
						<div className="title-underline">

						</div>
					</div>
					{/* team members info container */}
					<div className="team-member-container">
						{/* start of the  single team member */}
						<div className="single-member-container">
							{/* <div className="single-member-img-container">
								<img src= {team1} alt="team member image" />
							</div> */}
							{/* single member info container active on hover effect */}
							<div className="single-member-info-container">
								<h4 className="member-name"> Mehedi Hasan </h4>
								<p className="designation">designation Information of team member</p>
								<div className="bottom-line"></div>
								<p className="member-education">
									Academic information of the team members
								</p>
							</div>
							{/* end of single member info container active on hover effect */}
						</div>
						{/*end of  single team member container  */}
						{/* start of the  single team member */}
						<div className="single-member-container">
							{/*  <div className="single-member-img-container">
								<img src= {team1} alt="team member image" />
							</div>
							*/}
							{/* single member info container active on hover effect */}
							<div className="single-member-info-container">
								<div className='test'>
									<h4 className="member-name">Lorem, ipsum dolor.</h4>
									<p className="designation">Lorem ipsum dolor sit amet consectetur.</p>
									<div className="bottom-line"></div>
									<p className="member-education">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab!
									</p>
								</div>
							</div>
							{/* end of single member info container active on hover effect */}
						</div>
						{/*end of  single team member container  */}
						{/* start of the  single team member */}
						<div className="single-member-container">
							{/* <div className="single-member-img-container">
								<img src= {team1} alt="team member image" />
							</div> */}
							{/* single member info container active on hover effect */}
							<div className="single-member-info-container">
								<h4 className="member-name">Lorem, ipsum dolor.</h4>
								<p className="designation">Lorem ipsum dolor sit amet consectetur.</p>
								<div className="bottom-line"></div>
								<p className="member-education">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab!
								</p>
							</div>
							{/* end of single member info container active on hover effect */}
						</div>
						{/*end of  single team member container  */}
						{/* start of the  single team member */}
						<div className="single-member-container">
							{/* <div className="single-member-img-container">
								<img src= {team1} alt="team member image" />
							</div> */}
							{/* single member info container active on hover effect */}
							<div className="single-member-info-container">
								<h4 className="member-name">Lorem, ipsum dolor.</h4>
								<p className="designation">Lorem ipsum dolor sit amet consectetur.</p>
								<div className="bottom-line"></div>
								<p className="member-education">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab!
								</p>
							</div>
							{/* end of single member info container active on hover effect */}
						</div>
						{/*end of  single team member container  */}
					</div>
					{/* team members info container end*/}
				</div>
				{/* end of the team member info section */}
			</section>
			{/* end of  the team container  */}
		</>
	);
};

export default Team;