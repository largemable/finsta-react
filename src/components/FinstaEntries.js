import React, { useEffect, useState } from 'react';
import APIurl from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Image } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
const FinstaEntries = () => {
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		fetch(`${APIurl}finsta-api/entries`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${localStorage.getItem('token')}`,
			},
		})
			.then((res) => res.json())
			.then((res) => setEntries(res))
			.catch(console.error);
	}, []);
	if (!entries) {
		return (
			<div>
				<h1>Welcome!</h1>
				<h2>Select new entry to make your first post on Finsta!</h2>
			</div>
		);
	}
	return (
		<Container fluid>
			<Container className='entries-list'>
				<InfiniteScroll dataLength={entries.length} height={800}>
					{entries
						.sort(function (a, b) {
							return b.id - a.id;
						})
						.map((entry) => {
							return (
								<Card key={entry.id} className='entry-card'>
									<Image
										fluid
										src={entry.image}
										alt={entry.title}
										className='entry-image'
									/>
									<Card.Title>{entry.title}</Card.Title>
									<Card.Body>{entry.caption}</Card.Body>
								</Card>
							);
						})}
				</InfiniteScroll>
			</Container>
		</Container>
	);
};

export default FinstaEntries;
