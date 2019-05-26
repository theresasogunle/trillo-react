import React, { Component } from 'react';
import Header from './header/header'
import Content from './content/content'


class Container extends Component {
    
    render(){
        return(
            <div className="container">
            <Header/>
            <Content/>
           
        </div>
        )
    }
}

export default Container;