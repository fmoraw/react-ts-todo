import React from 'react';
import * as Parse from 'parse';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ListComponent from "./02-ListComponent/ListComponent.container"
import SandboxHeader from './SandBoxHeader';

const initializeParse = () => {
  Parse.initialize('myAppId');
  (Parse as any).serverURL = 'https://fulda-dev-meetup.herokuapp.com/parse';
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
