import React, { Component } from 'react'
import './App.css'
import Collection from './Collection/Collection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pantone Colors 2018</h1>
        <hr />
        <Collection />
      </div>
    );
  }
}

export default App

