import './App.css';
import FinstaEntries from './components/FinstaEntries';
import NewEntryForm from './components/NewEntryForm';
import Header from './components/Header';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App' id='content'>
			<Header />
			<FinstaEntries />
			<NewEntryForm />
		</div>
	);
}

export default App;
