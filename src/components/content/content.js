import React, { Component } from 'react';
import SideBar from './sidebar'
import HotelView from './hotel-view'



class Content extends Component {
    render(){
        return(
            <div className="content">
               <SideBar/>
               <HotelView/>

            </div>
        )
    }
}

export default Content;