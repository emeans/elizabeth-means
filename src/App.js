import './app.scss';
import Navigation from './navigation/navigation';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
        <Navigation></Navigation>
        <main>
            <Outlet />
        </main>
    </div>
  );
}

export default App;
