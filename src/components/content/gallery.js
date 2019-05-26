import React, { Component } from 'react';




class Gallery extends Component {
    render(){
        return(
            <div className="gallery">
                <figure class="gallery__item">
                    <img src={require('../../img/hotel-1.jpg')} alt="img" class="gallery__photo"/>
                </figure>
                <figure class="gallery__item">
                    <img src={require('../../img/hotel-2.jpg')} alt="img" class="gallery__photo"/>
                </figure>
                <figure class="gallery__item">
                    <img src={require('../../img/hotel-3.jpg')} alt="img" class="gallery__photo"/>
                </figure>
            </div>
        )
    }
}

export default Gallery;