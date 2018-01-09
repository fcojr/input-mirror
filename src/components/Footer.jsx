import React from 'react'
const Footer = (props) =>{
    return(
        <div>
            <footer><a href="https://github.com/fcojr/input-mirror"><strong>{props.name}</strong></a> hosted with ❤️ by <strong><a href="https://github.com">{props.host}</a></strong></footer>
        </div>
    )
}
export default Footer