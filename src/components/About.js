import React from 'react';

const About = () => {
	return (
		<div>
			<h1>Hello, world!</h1>
			<img
				src='https://avatars.githubusercontent.com/u/77953457?s=400&u=3f022d653e3c7e3f85336a0a991b302203b70361&v=4'
				alt='image of developer'
				className='profpic'
			/>
			<div className='about-finsta'>
				<h2>Welcome to Finsta</h2>
				<p>
					My name is Mable Palombo, and I'm the developer behind this app. I
					created this as my capstone project for the General Assembly Software
					Engineering Immersive program. The inspiration behind this app is my
					love for documenting but my avoidance of social media. My use for this
					app is as a personal journal but with the modern convenience of other
					social media apps. I used Python, DjangoDB and Postgres to build the
					backend and on the frontend I'm using React and Bootstrap. Please
					enjoy and take a look at my github if you'd like to see my other
					projects!
				</p>

				<a href='https://github.com/largemable'>Github</a>
			</div>
		</div>
	);
};

export default About;
