import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Service workers are the proxy servers that connect the app and network. With Service Worker, 
        you will have to intercept network requests and save cached files. This will enable your app to work even when the network is unavailable.
        </p>

      </header>
    </div>
  );
}

export default App;
