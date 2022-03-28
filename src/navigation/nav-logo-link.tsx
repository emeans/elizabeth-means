import React from "react";
import { NavLink } from "react-router-dom";
import './nav-logo-link.scss';

export default class NavLogoLink extends React.Component {

    render() {
        return(
            <div className='header-logo-container'>
                <NavLink
                    aria-label='home'
                    to='/home'>
                    <div className='header-logo'></div>
                </NavLink>
            </div>
        );
    }
}