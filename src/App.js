import logo from './logo.svg';
import './App.css';
import { Button } from '@emeansbit/base-ui.button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          An amazing website is coming soon! 
        </p>
        <Button>bit.dev test button</Button>
      </header>
    </div>
  );
}

export default App;
