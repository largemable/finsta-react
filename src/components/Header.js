import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
const Header = () => {
	return (
		<>
			<Navbar sticky='top' bg='white' className='header'>
				<h1>Finsta</h1>
			</Navbar>
		</>
	);
};

export default Header;
