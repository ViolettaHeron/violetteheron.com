import React, { Component } from 'react';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Violette Héron</h1>
        </header>
      </div>
    );
  }
}

export default App;
