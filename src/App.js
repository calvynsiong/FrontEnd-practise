import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1>Hello</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
