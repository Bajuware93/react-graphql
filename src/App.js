import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import client from './components/apolloclient';
import ExchangeRates from './components/exchangerates';
import Dogs from './components/dogs';
import Dogs1 from './components/dog1';
import AddTodo from './components/addtodo';
import Todos from './components/todos';
import GetFriend from './components/user';

import { ApolloProvider } from "react-apollo";

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GetFriend />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
