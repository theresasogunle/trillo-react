import React, { Component } from 'react';
import Description from './description'
import Review from './review'



class Content extends Component {
    render(){
        return(
            <div className="detail">
              <Description/>
              <Review/>
            </div>
        )
    }
}

export default Content;