import './app.scss'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './header/header'
import Footer from './footer/footer'
import DesktopNavigation from './navigation/desktop-navigation'
import MobileNavigation from './navigation/mobile-navigation'

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
			<div>
                <MobileNavigation></MobileNavigation>
				{header}
				<DesktopNavigation></DesktopNavigation>
				<main>
					<Outlet />
				</main>
				<Footer></Footer>
			</div>
		)
	}

	return <div>{renderApp}</div>
}

export default App
