import React, { Component } from 'react'
class Footer extends Component{
    render(){
        return(
            <div>
                <footer><a href="https://github.com/fcojr/input-mirror"><strong>{this.props.name}</strong></a> hosted with ❤️ by <strong><a href="https://github.com">{this.props.host}</a></strong></footer>
            </div>
        )
    }
}
export default Footer