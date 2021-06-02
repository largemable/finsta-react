import React, { useEffect, useState } from 'react';

const FinstaEntries = () => {
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/finsta-api/entries')
			.then((res) => res.json())
			.then((res) => setEntries(res))
			.then(console.log(entries))
			.catch(console.error);
	}, []);

	return (
		<div>
			<h1>Hello from React!</h1>
			<div className='entries-list'>
				{entries.map((entry) => {
					return (
						<div>
							<h2>{entry.title}</h2>
							<p>{entry.caption}</p>
							<img src={entry.image} alt={entry.title} height='400px' />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FinstaEntries;
