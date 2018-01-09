import React from 'react'
import logo from '../logo.svg'
import '../App.css';

const Header = (props) =>{
	return (
		<div className="Header">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>{props.title}</h1>
			</header>
		</div>
	)
}
export default Header