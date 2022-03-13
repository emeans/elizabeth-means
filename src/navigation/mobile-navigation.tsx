import React from 'react'
import { NavLink } from 'react-router-dom'
import { IMobileMenuState, IProps } from '../types'
import './navigation.scss'

export default class MobileNavigation extends React.Component<IProps, IMobileMenuState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			isToggleOn: false,
		}

		this.handleMenuClick = this.handleMenuClick.bind(this)
	}

	handleMenuClick() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
		}))
	}

	render() {
		// const textLinks = this.state.

		return (
			<nav className='mobile-navigation' aria-label='Main Navigation'>
				<div
					className='mobile-menu menu-button-animation'
					data-menu-open={this.state.isToggleOn}
					onClick={this.handleMenuClick}>
					<span></span>
				</div>
				<div className='mobile-menu-content' data-menu-open={this.state.isToggleOn}>
					<ul className='menu-list' data-menu-open={this.state.isToggleOn}>
						<li>
							<NavLink
								aria-label='About'
								to='/about'
								style={({ isActive }) => {
									return {
										color: isActive ? '#7AD860' : '#0D0D0D',
									}
								}}>
								<h2>About</h2>
							</NavLink>
						</li>
						<li>
							<NavLink
								aria-label='Portfolio'
								to='/portfolio'
								style={({ isActive }) => {
									return {
										color: isActive ? '#7AD860' : '#0D0D0D',
									}
								}}>
								<h2>Portfolio</h2>
							</NavLink>
						</li>
						<li>
							<NavLink
								aria-label='Playground'
								to='/playground'
								style={({ isActive }) => {
									return {
										color: isActive ? '#7AD860' : '#0D0D0D',
									}
								}}>
								<h2>Playground</h2>
							</NavLink>
						</li>
						<li>
							<NavLink
								aria-label='GetInTouch'
								to='/getintouch'
								style={({ isActive }) => {
									return {
										color: isActive ? '#7AD860' : '#0D0D0D',
									}
								}}>
								<h2>Get In Touch</h2>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}
