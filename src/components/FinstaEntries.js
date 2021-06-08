import React, { useEffect, useState } from 'react';
import APIurl from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Image } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

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
		<Container fluid>
			<Container className='entries-list'>
				<InfiniteScroll dataLength={entries.length} height={800}>
					{entries.map((entry) => {
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
