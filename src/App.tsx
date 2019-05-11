import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React from 'react';
import * as Parse from 'parse';
import logo from './logo.svg';
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
      </header>
      <ListComponent />
    </div>
  );
}

export default App;
