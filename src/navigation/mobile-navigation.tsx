import React from 'react';
import { IMobileMenuState, IProps } from '../types';
import './navigation.scss'

export default class MobileNavigation  extends React.Component<IProps, IMobileMenuState>  {
    constructor(props: IProps) {
        super(props);
        this.state = {isToggleOn: false};
    
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
    }

    render() {
        return (
            <nav className='mobile-navigation' aria-label='Main Navigation'>
                <div className="mobile-menu menu-button-animation" data-menu-open={this.state.isToggleOn}  onClick={this.handleClick}>
                    <span></span>
                </div>
            </nav>
        )
    }
	
}
