import { NavLink } from 'react-router-dom'
import './navigation.scss'

export default function DesktopNavigation() {
	return (
		<nav className='desktop-navigation' aria-label='Main Navigation'>
			<div>
				<NavLink
					aria-label='Home'
					to='/home'
					className='header-logo'
					style={({ isActive }) => {
						return {
							color: isActive ? '#7AD860' : '#0D0D0D',
						}
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
						}
					}}>
					<h4>About</h4>
				</NavLink>
				<NavLink
					aria-label='Portfolio'
					to='/portfolio'
					style={({ isActive }) => {
						return {
							color: isActive ? '#7AD860' : '#0D0D0D',
						}
					}}>
					<h4>Portfolio</h4>
				</NavLink>
                <NavLink 
                    aria-label='Playground'
                    to='/playground' 
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#7AD860' : '#0D0D0D',
                        };
                    }}>
                    <h4>Playground</h4>
                </NavLink>
				<NavLink
					aria-label='GetInTouch'
					to='/getintouch'
					style={({ isActive }) => {
						return {
							color: isActive ? '#7AD860' : '#0D0D0D',
						}
					}}>
					<h4>Get In Touch</h4>
				</NavLink>
				<span className='social-media-links'>
					<a
						href='https://www.linkedin.com/in/elizabeth-a-means/'
						target='_blank'
						rel='noreferrer'
						aria-label='LinkedIn'>
						<div className='linkedin'></div>
					</a>
					<a
						href='https://github.com/emeans'
						target='_blank'
						rel='noreferrer'
						aria-label='Github'>
						<div className='github'></div>
					</a>
					<a
						href='https://codepen.io/emeans'
						target='_blank'
						rel='noreferrer'
						aria-label='Codepen'>
						<div className='codepen'></div>
					</a>
				</span>
			</div>
		</nav>
	)
}
