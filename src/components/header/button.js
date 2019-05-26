import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class Button extends Component {
    render(){
        return(     
         <Link to="/login" className="btn btn--pink">Sign In</Link>
           
        )
    }
}

export default Button;