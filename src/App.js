import './App.css';
import FinstaEntries from './components/FinstaEntries';
import NewEntryForm from './components/NewEntryForm';
import About from './components/About';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LogOut from './components/LogOut';
import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App' id='content'>
			<Header />
			<Switch>
				<Route path='/' exact>
					<h1>Welcome to Finsta!</h1>
					<h2>the social-less media app</h2>
				</Route>
				<Route path='/upload'>
					<NewEntryForm />
				</Route>
				<Route path='/dashboard'>
					<FinstaEntries />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route path='/login'>
					<LogIn />
				</Route>
				<Route path='/signup'>
					<SignUp />
				</Route>
				<Route path='/logout'>
					<LogOut />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

// https://blog.devgenius.io/django-react-authentication-part-2-ea626688165e
