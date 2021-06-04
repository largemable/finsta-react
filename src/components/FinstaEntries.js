import React, { useEffect, useState } from 'react';
import APIurl from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Column, Image } from 'react-bootstrap';
const FinstaEntries = () => {
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		fetch(`${APIurl}entries`)
			.then((res) => res.json())
			.then((res) => setEntries(res))
			.then(console.log(entries))
			.catch(console.error);
	}, []);

	return (
		<Container>
			<h1>Hello from React!</h1>
			<Container className='entries-list'>
				{entries.map((entry) => {
					return (
						<Card style={{ width: '32rem' }}>
							<Image fluid src={entry.image} alt={entry.title} />
							<Card.Title>{entry.title}</Card.Title>
							<Card.Body>{entry.caption}</Card.Body>
						</Card>
					);
				})}
			</Container>
		</Container>
	);
};

export default FinstaEntries;
