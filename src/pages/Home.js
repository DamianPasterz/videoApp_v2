import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/Home.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar"
import RecomendetVideo from "../components/RecomendetVideo"
// import { style } from '@mui/system';

const Home = () => {
	return (
		<div className='app'>
			<Header></Header>
			<div className='app__page'>
				<Sidebar />
				<RecomendetVideo />
			</div>
		</div>
	)
};

export default Home;
