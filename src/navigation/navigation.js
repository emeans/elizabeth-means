import React from 'react';
import { NavLink } from "react-router-dom";
import './navigation.scss';

export default function Navigation() {
    return (
        <nav>
            <NavLink 
                to="/home" 
                className="header-logo"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "#F5A228" : "#183834",
                    };
                }}>
                e
            </NavLink>
            <NavLink 
                to="/about" 
                className="text-link"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "#F5A228" : "#183834",
                    };
                }}>
                About Me
            </NavLink>
        </nav>
    );
}
