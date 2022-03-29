import './app.scss';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import DesktopNavigation from './navigation/desktop-navigation';
import MobileNavigation from './navigation/mobile-navigation';
import configuration from './configuration.json';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function App() {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const theme: any = useContext(ThemeContext);

    const handleThemeSwitch = () => {
        if (theme.state.selectedTheme === 'theme-dark') {
          theme.dispatch({ type: "LIGHTMODE" });
        } else {
          theme.dispatch({ type: "DARKMODE" });
        }
    };

    const location = useLocation();
    let renderApp = null
    if (location.pathname === '/underconstruction') {
        renderApp = <Outlet />
    } else {
        let header = null
        if (location.pathname === '/home') {
            header = <Header ></Header>
        }

        renderApp = (
            <div className={theme.state.selectedTheme}>
                <MobileNavigation
                    textLinks={configuration.navigation.textLinks}
                    socialLinks={configuration.navigation.socialLinks}
                    onHandleThemeSwitch={handleThemeSwitch}>
                </MobileNavigation>
                {header}
                <DesktopNavigation
                    textLinks={configuration.navigation.textLinks}
                    socialLinks={configuration.navigation.socialLinks}
                    onHandleThemeSwitch={handleThemeSwitch}>
                </DesktopNavigation>
                <main>
                    <Outlet />
                </main>
                <Footer></Footer>
            </div>
        );
    }

    return renderApp;
}
