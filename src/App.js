import './App.css';
import NavBar from './navBar/navBar.component.jsx';
import Profile from './profilePage/profile.component.jsx';
import React from 'react';
import {Route, IndexRoute} from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Profile></Profile>
      </div>
    )
  }
}

export default App;
