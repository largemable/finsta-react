import React, { useState } from 'react';
import APIurl from '../config';
const NewEntryForm = () => {
	const [image, setImage] = useState({});

	const uploadImage = (e) => {
		setImage({
			/* contains the preview, if you want to show the Image to the user
           you can access it with this.state.currentImage
       */
			imagePreview: URL.createObjectURL(e.target.files[0]),
			/* this contains the file we want to send */
			imageAsFile: e.target.files[0],
		});
	};

	const setImageAction = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('file', image.ImageAsFile);

		console.log(image.ImageAsFile);

		for (var key of formData.entries()) {
			console.log(key[0] + ', ' + key[1]);
		}

		const data = await fetch(`${APIurl}entries/`, {
			method: 'post',
			headers: { 'Content-Type': 'multipart/form-data' },
			body: formData,
		});
		const uploadedImage = await data.json();
		if (uploadedImage) {
			console.log('Successfully uploaded image');
		} else {
			console.log('Error Found');
		}
	};

	return (
		<div className='content landing'>
			<form onSubmit={setImageAction}>
				<input type='file' name='image' onChange={uploadImage} />
				<br />
				<br />
				<button type='submit' name='upload'>
					Upload
				</button>
			</form>
		</div>
	);
};

export default NewEntryForm;

// https://stackoverflow.com/questions/61700261/upload-image-request-from-react
