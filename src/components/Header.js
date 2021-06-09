import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		if (localStorage.getItem('token') !== null) {
			setIsAuth(true);
		}
	}, []);

	return (
		<Navbar sticky='top' className='header'>
			{/* <Link to='/dashboard'>
				<h1>Finsta</h1>
			</Link> */}

			{isAuth === true ? (
				<Fragment>
					{' '}
					<Link
						style={{ textDecoration: 'none' }}
						className='hvr-sink'
						to='/dashboard'>
						<h1>Finsta</h1>
					</Link>
					<Col>
						<Link
							style={{ textDecoration: 'none' }}
							className='hvr-sink'
							to='/upload'>
							New Entry
						</Link>
					</Col>
					<Col>
						<Link
							style={{ textDecoration: 'none' }}
							className='hvr-sink'
							to='/logout'>
							Logout
						</Link>
					</Col>
					<Col>
						<Link
							style={{ textDecoration: 'none' }}
							className='hvr-sink'
							to='/about'>
							About
						</Link>
					</Col>
				</Fragment>
			) : (
				<Fragment>
					{' '}
					<h1>Finsta</h1>
					<Col>
						<Link
							style={{ textDecoration: 'none' }}
							className='hvr-sink'
							to='/login'>
							Login
						</Link>
					</Col>
					<Col>
						<Link
							style={{ textDecoration: 'none' }}
							className='hvr-sink'
							to='/signup'>
							Signup
						</Link>
					</Col>
					<Col>
						<Link
							style={{ textDecoration: 'none' }}
							className='hvr-sink'
							to='/about'>
							About
						</Link>
					</Col>
				</Fragment>
			)}
		</Navbar>
	);
};

export default Header;
