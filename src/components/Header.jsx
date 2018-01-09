import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css';
class Header extends Component{
	constructor(props){
		super(props)
		this.state = {value: props.title}
	}
	render(){
		return (
			<div className="Header">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>{this.props.title}</h1>
				</header>
			</div>
		)
	}
}
export default Header