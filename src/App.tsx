import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ListComponent from "./02-ListComponent/TodoList"
import SandboxHeader from './SandBoxHeader';

const App: React.FC = () => {
  return (
    <div>
      <header className="App-header">
        <SandboxHeader />
        <ListComponent />
        <div className="app">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
       </div>
      </header>
    </div>
  );
}

export default App;
