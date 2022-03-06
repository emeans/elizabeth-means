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
    let header = null;
    if (location.pathname === '/home') {
        header = <Header></Header>;
    }

    return (
        <div className='sticky-nav'>
           {header}
            <Navigation></Navigation>
            <main>
                <Outlet />
            </main>
        <Footer></Footer>
        </div>
    );
}

export default App;
