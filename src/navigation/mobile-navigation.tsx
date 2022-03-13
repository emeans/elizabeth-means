import React from 'react'
import { NavLink } from 'react-router-dom'
import { IMobileMenuState, INavigationMenuProps } from '../types'
import MobileMenuButton from './mobile-menu-button/mobile-menu-button'
import MobileMenuContent from './mobile-menu-content/mobile-menu-content'
import NavLogoLink from './nav-logo-link/nav-logo-link'
import './navigation.scss'

export default class MobileNavigation extends React.Component<INavigationMenuProps, IMobileMenuState> {
	constructor(props: INavigationMenuProps) {
		super(props)
        this.state = {
            isToggleOn: false
        }

		this.handleMenuClick = this.handleMenuClick.bind(this)
	}

	handleMenuClick() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
		}))
	}

	render() {
		return (
			<nav className='mobile-navigation' aria-label='Main Navigation' data-menu-open={this.state.isToggleOn}>
                <div className='mobile-menu-header'>
                    <NavLogoLink></NavLogoLink>
                    <MobileMenuButton
                        isToggleOn={this.state.isToggleOn}
                        onHandleMenuClick={this.handleMenuClick} />
                </div>
                <MobileMenuContent 
                    textLinks={this.props.textLinks}
                    socialLinks={this.props.socialLinks}
                    isToggleOn={this.state.isToggleOn}
                    onHandleMenuClick={this.handleMenuClick} />
			</nav>
		)
	}
}
