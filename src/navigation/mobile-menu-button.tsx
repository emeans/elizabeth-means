import React from 'react';
import { IMobileMenuState, INavigationMenuProps } from '../types';
import './mobile-menu-button.scss';

export default class MobileMenuButton extends React.Component<INavigationMenuProps, IMobileMenuState> {
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
        return(
            <div
                className='menu-button menu-button-animation'
                data-menu-open={this.props.isToggleOn}
                onClick={this.handleMenuClick}>
                <span></span>
            </div>
        )
    }
}