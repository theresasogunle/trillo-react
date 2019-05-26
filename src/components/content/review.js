import React, { Component } from 'react';




class Review extends Component {
    render(){
        return(
            <div class="user-reviews">
            <figure class="review">

                <blockquote class="review__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis magni repellat quo quaerat assumenda ut vel nobis natus minus tenetur architecto i taque velit commodi atque, error officia. Consequatur, aliquid. Amet?
                </blockquote>

                <figcaption class="review__user">
                    <img src={require('../../img/user-1.jpg')} alt="img" class="review__photo"/>
                    <div class="review__user-box">
                        <p class="review__user-name">Nick Smith</p>
                        <p class="review__user-date">Feb 23rd 2019</p>
                    </div>
                    <div class="review__rating">7.8</div>

                </figcaption>

            </figure>

            <figure class="review">

                <blockquote class="review__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis magni repellat quo quaerat assumenda ut vel nobis natus minus tenetur architecto i taque velit commodi atque, error officia. Consequatur, aliquid. Amet?
                </blockquote>

                <figcaption class="review__user">
                    <img src={require('../../img/user-2.jpg')} alt="img" class="review__photo"/>
                    <div class="review__user-box">
                        <p class="review__user-name">Mary Thomas</p>
                        <p class="review__user-date">Sept 13th 2019</p>
                    </div>
                    <div class="review__rating">9.3</div>

                </figcaption>

            </figure>
            <button class="btn-inline">Show all <span>&rarr;</span></button>
        </div>

        )
    }
}

export default Review;