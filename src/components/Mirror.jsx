import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
class Mirror extends Component{
	constructor(props){
		super(props)
		this.state = {value: props.initialValue}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event){
		this.setState ({value: event.target.value})
	}
	render(){
		return(
			<div>
				<Header title="A Simple SetStage App" />
				<div className="content">
					<textarea rows="4" onChange={this.handleChange} value={this.state.value} />
					<p>{this.state.value}</p>
				</div>
				<Footer name="input-mirror" host="GitHub" />
			</div>
		)
	}
}
export default Mirror