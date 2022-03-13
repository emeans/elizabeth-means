import React from "react";
import { NavLink } from "react-router-dom";
import { IMobileMenuState, INavigationMenuProps } from "../../types";
import './mobile-menu-content.scss';

export default class MobileMenuContent extends React.Component<INavigationMenuProps, IMobileMenuState> {
    constructor(props: INavigationMenuProps) {
        super(props);

        this.handleMenuClick = this.handleMenuClick.bind(this)
    }

    handleMenuClick(): void {
        if (this.props.onHandleMenuClick) {
            this.props.onHandleMenuClick();
        }
    }
    
    render() {
        const textLinks = this.props.textLinks ? this.props.textLinks.map((link, i) => 
            <li key={i}>
                <NavLink
                    aria-label={link.text}
                    to={link.link}
                    onClick={this.handleMenuClick}>

                    <h2>{link.text}</h2>
                </NavLink>
            </li>
        ) : null;
        
        return(
            <div className='mobile-menu-content' data-menu-open={this.props.isToggleOn}>
                <ul className='menu-list'>
                    {textLinks}
                </ul>
            </div>
        );
    }
}