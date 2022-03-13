import React from 'react';
import { NavLink } from 'react-router-dom';
import { IState, INavigationMenuProps } from '../types';
import NavLogoLink from './nav-logo-link/nav-logo-link';
import './navigation.scss';

export default class DesktopNavigation extends React.Component<INavigationMenuProps, IState>  {
    render () {
        const textLinks = this.props.textLinks!.map((link, i) => 
            <NavLink
                key={i}
                aria-label={link.text}
                to={link.link}
                style={({ isActive }) => {
                    return {
                        color: isActive ? '#7AD860' : '#0D0D0D',
                    }
                }}>

                <h4>{link.text}</h4>
            </NavLink>
        );

        const socialLinks = this.props.socialLinks!.map((link, i) => 
            <a 
                key={i}
                href={link.link}
                target='_blank'
                rel='noreferrer'
                aria-label={link.text}>
                <div className={link.text}></div>
            </a>

        );

        return (
            <nav className='desktop-navigation' aria-label='Main Navigation'>
                <div>
                   <NavLogoLink></NavLogoLink>
                </div>
                <div className='text-link'>
                    {textLinks}
                    <span className='social-media-links'>
                        {socialLinks}
                    </span>
                </div>
            </nav>
        )
    }
}
