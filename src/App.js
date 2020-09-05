import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Index from './components/Index';
import Dropdown from './components/Dropdown';
import People from './components/People';
import Planet from './components/Planet';
import NotDroids from './components/NotDroids';

function App() {
  return (
    <div className="App">
      <Router>
        <Index path="/"/>
        <Dropdown path="/dropdown"/>
        <People path="/people/:id"/>
        <Planet path="/planets/:id"/>
        <NotDroids path="/yikes"/>
      </Router>
    </div>
  );
}

export default App;
