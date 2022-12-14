import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
    let [number, setNumber] = useState(0);

    let handleIncrease = () => {
        setNumber(number++);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React Hooks {number}</h1>

                <button onClick={() => handleIncrease()}>Increase</button>
            </header>
        </div>
    );
};

export default App;
