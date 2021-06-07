import React, { useState } from 'react';
import APIurl from '../config';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const NewEntryForm = () => {
	const [newEntry, setNewEntry] = useState({
		title: '',
		caption: '',
		user: '1',
		image: null,
	});

	const handleChange = (e) => {
		e.preventDefault();
		setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', newEntry.title);
		formData.append('caption', newEntry.caption);
		formData.append('user', newEntry.user);
		formData.append('image', newEntry.image);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};
		axios.post(`${APIurl}entries/`, formData, config);
	};

	const handleImageChange = (e) => {
		e.preventDefault();

		setNewEntry({ ...newEntry, [e.target.name]: e.target.files[0] });
	};
	return (
		<Container>
			<Form inline className='content landing' onSubmit={handleSubmit}>
				<Form.Group>
					<Form.File name='image' onChange={handleImageChange} />
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='input'
						name='title'
						placeholder='Enter Title'
						value={newEntry.title}
						onChange={handleChange}
					/>
					<Form.Label>Caption</Form.Label>
					<Form.Control
						type='input'
						name='caption'
						placeholder='Caption'
						value={newEntry.caption}
						onChange={handleChange}
					/>
					<Button type='submit' name='Upload'>
						Upload
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default NewEntryForm;

// https://stackoverflow.com/questions/61700261/upload-image-request-from-react

// https://stackoverflow.com/questions/41878838/how-do-i-set-multipart-in-axios-with-react
