import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar"
import SearchPage from "../components/SearchPage"

const Home = () => {
	return (
		<>
			<Header></Header>;
			<Sidebar></Sidebar>
			<SearchPage></SearchPage>
		</>
	)
};

export default Home;
