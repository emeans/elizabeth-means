import './app.scss';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import DesktopNavigation from './navigation/desktop-navigation';
import MobileNavigation from './navigation/mobile-navigation';
import configuration from './configuration.json';

function App() {
	const location = useLocation()
	let renderApp = null

	if (location.pathname === '/underconstruction') {
		renderApp = <Outlet />
	} else {
		let header = null
		if (location.pathname === '/home') {
			header = <Header></Header>
		}

		renderApp = (
			<div className='theme-dark'>
				<MobileNavigation
                    textLinks={configuration.navigation.textLinks}
                    socialLinks={configuration.navigation.socialLinks}>
                </MobileNavigation>
				{header}
				<DesktopNavigation
                    textLinks={configuration.navigation.textLinks}
                    socialLinks={configuration.navigation.socialLinks}>
                </DesktopNavigation>
				<main>
					<Outlet />
				</main>
				<Footer></Footer>
			</div>
		)
	}

	return renderApp;
}

export default App
