import React from "react";
import './nav-logo-link.scss';

export default class NavLogoLink extends React.Component {

    render() {
        return(
            <div className='header-logo-container'>
                <a 
                    href='/home'
                    aria-label='home'>
                    <div className='header-logo'></div>
                </a>
            </div>
        );
    }
}