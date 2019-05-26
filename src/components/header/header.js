import React, { Component } from 'react';
import Form from './form'
import UserNavigation from './nav'
import Button from './button';



class Header extends Component {
    render(){
        return(
            <header className="header">
                 <img src={require('../../img/logo.png')} alt="img" class="logo"/>
                 <Form/>
                 <UserNavigation/>
                 {/* <Button/> */}
            </header>
        )
    }
}

export default Header;