import React from 'react';
import * as Parse from 'parse';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ListComponent from "./02-ListComponent/TodoList"
import SandboxHeader from './SandBoxHeader';

declare var process : {
  env: {
    REACT_APP_PARSE_APP_ID: string,
    REACT_APP_PARSE_SERVER_URL: string,
  }
}

const initializeParse = () => {
  Parse.initialize(process.env.REACT_APP_PARSE_APP_ID);
  (Parse as any).serverURL = process.env.REACT_APP_PARSE_SERVER_URL;
};

initializeParse();

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
