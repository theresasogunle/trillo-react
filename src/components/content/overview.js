import React, { Component } from 'react';




class Overview extends Component {
    render(){
        return(
            <div class="overview">
                <h1 class="overview__heading">
                    Hotel Las Pamas
                </h1>
                <div class="overview__stars">
                    <svg class="overview__icon-star">
                    <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                    </svg>
                    <svg class="overview__icon-star">
                    <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                    </svg>
                    <svg class="overview__icon-star">
                    <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                </svg>
                    <svg class="overview__icon-star">
                   <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                </svg>
                    <svg class="overview__icon-star">
               <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"/>
                 </svg>
                </div>
                <div class="overview__location">
                    <svg class="overview__icon-location">
                    <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"/>
                    </svg>
                    <button class="btn-inline">Albufeira, Portugal </button>
                </div>
                <div class="overview__rating">
                    <div class="overview__rating-average">8.6</div>
                    <div class="overview__rating-count">429 votes</div>

                </div>
            </div>
        )
    }
}

export default Overview;















