import './App.css';
import FinstaEntries from './components/FinstaEntries';
import NewEntryForm from './components/NewEntryForm';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
			<FinstaEntries />
			<NewEntryForm />
		</div>
	);
}

export default App;
