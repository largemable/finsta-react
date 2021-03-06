import React, { useState, useEffect, Fragment } from 'react';
import APIurl from '../config';
const LogOut = () => {
	const url = 'https://finsta2021.herokuapp.com/';
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('token') == null) {
			window.location.replace(`${url}login`);
		} else {
			setLoading(false);
		}
	}, []);

	const handleLogout = (e) => {
		e.preventDefault();

		fetch(`${APIurl}users/auth/logout/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				localStorage.clear();
				window.location.replace(`${url}login`);
			});
	};

	return (
		<div>
			{loading === false && (
				<Fragment>
					<h1>Are you sure you want to logout?</h1>
					<input type='button' value='Logout' onClick={handleLogout} />
				</Fragment>
			)}
		</div>
	);
};

export default LogOut;
