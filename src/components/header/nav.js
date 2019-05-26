import React, { Component } from 'react';


class UserNavigation extends Component {
    render(){
        return(
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                    <path d="M14 2v17l-4-4-4 4v-17c0-0.553 0.585-1.020 1-1h6c0.689-0.020 1 0.447 1 1z"/>
                    </svg>
                    <span class="user-nav__notification">7</span>
                </div>

                <div class="user-nav__icon-box">
                    <svg class="user-nav__icon">
                    <path d="M5.8 12.2v-6.2h-3.8c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h1v3l3-3h5c1.1 0 2-0.9 2-2v-1.82c-0.064 0.014-0.132 0.021-0.2 0.021l-7-0.001zM18 1h-9c-1.1 0-2 0.9-2 2v8h7l3 3v-3h1c1.1 0 2-0.899 2-2v-6c0-1.1-0.9-2-2-2z"/>      
                    </svg>
                    <span class="user-nav__notification">13</span>
                </div>
                <div class="user-nav__user">
                    <img src={require('../../img/user.jpg')} alt="img" class="user-nav__user-photo"/>
                    <span class="user-nav__user-name">Jonas</span>
                </div>
            </nav>
        )
    }
}

export default UserNavigation;