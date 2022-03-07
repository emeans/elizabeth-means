import './app.scss';
import { 
    Outlet,
    useLocation
} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Navigation from './navigation/navigation';

function App() {
    let location = useLocation();
    let renderApp = null;

    if (location.pathname === '/underconstruction') {
        renderApp = <Outlet />;
    } else {
        let header = null;
        if (location.pathname === '/home') {
            header = <Header></Header>;
        }

        renderApp = (
            <div className='sticky-nav'>
                {header}
                <Navigation></Navigation>
                <main>
                    <Outlet />
                </main>
                <Footer></Footer>
            </div>);
    }

    return (
        <div>
            {renderApp}
        </div>
    );
}

export default App;
