import React, { Component } from 'react';




class Description extends Component {
    render(){
        return(  
    <div class="description">
            <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem fugit harum, perspiciatis laborum reprehenderit dolores sunt minima possimus ducimus minus in quos est nisi nam quam similique debitis? Saepe!
            </p>
            <p class="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem fugit harum, perspiciatis laborum reprehenderit dolores sunt minima possimus ducimus minus in quos est nisi nam quam similique debitis? Saepe!
            </p>
            <ul class="list">
                <li class="list__item">Close to the beach</li>
                <li class="list__item">Breakfast Included</li>
                <li class="list__item">Free airport shuttle</li>
                <li class="list__item">Free wifi in all Rooms</li>
                <li class="list__item">Air conditioning and heating</li>
                <li class="list__item">Pets allowed</li>
                <li class="list__item">We speak all languages</li>
                <li class="list__item">Perfect for families</li>
            </ul>
            <div class="recommend">
                <p class="recommend__count">Lucy and 3 other friends recommend this hotel.</p>
                <div class="recommend__friends">
                    <img src={require('../../img/user-3.jpg')} alt="Friend 1" class="recommend__photo"/>
                    <img src={require('../../img/user-4.jpg')} alt="Friend 2" class="recommend__photo"/>
                    <img src={require('../../img/user-5.jpg')} alt="Friend 3" class="recommend__photo"/>
                    <img src={require('../../img/user-6.jpg')} alt="Friend 4" class="recommend__photo"/>
                </div>
            </div>
        </div>
        )
    }
}

export default Description;





