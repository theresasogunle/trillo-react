import React, { Component } from 'react';
import Gallery from './gallery'
import Overview from './overview'
import Detail from './detail'




class HotelView extends Component {
    render(){
        return(
            <main class="hotel-view">
            <Gallery/>
            <Overview/>
            <Detail/>
            <div class="cta">
                <h2 class="cta__book-now">Good news! We have 4 free rooms for your selected dates !</h2>
                <button class="btn btn-cta">  Only Four 4 Left </button>
            </div>
        </main>
        )
    }
}

export default HotelView;