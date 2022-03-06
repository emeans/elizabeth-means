import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

export default function Navigation() {
           
    return (
        <nav aria-label='Main Navigation'>
            <div>
                <NavLink 
                    aria-label='Home'
                    to='/home' 
                    className='header-logo'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#7AD860' : '#0D0D0D',
                        };
                    }}>
                    e
                </NavLink>
            </div>
            <div className='text-link'>
                <NavLink 
                    aria-label='About'
                    to='/about' 
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#7AD860' : '#0D0D0D',
                        };
                    }}>
                    About
                </NavLink>
                <span></span>
                <NavLink 
                    aria-label='Portfolio'
                    to='/portfolio' 
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#7AD860' : '#0D0D0D',
                        };
                    }}>
                    Portfolio
                </NavLink>
                <span></span>
                {/* {' '} | {' '}
                <NavLink 
                    aria-label='Playground'
                    to='/playground' 
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#7AD860' : '#0D0D0D',
                        };
                    }}>
                    Playground
                </NavLink> */}
                <span></span>
                <NavLink 
                    aria-label='GetInTouch'
                    to='/getintouch' 
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#7AD860' : '#0D0D0D',
                        };
                    }}>
                    Get In Touch
                </NavLink>
            </div>
        </nav>
    );
}
