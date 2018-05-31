import React, { Component } from 'react';
import './App.css';
import History from './History';
import Home from './Home';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <NavLink exact to="/" activeClassName="selected" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }} >Home</NavLink>
          <NavLink exact to="/notre-histoire" activeClassName="selected" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}>Histoire</NavLink>

        </ul>

        <Route exact path='/' component={Home} />
        <Route path='/notre-histoire' component={History} />

      </div>
    );
  }
}

export default App;
