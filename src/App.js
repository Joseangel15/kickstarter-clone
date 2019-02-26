import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
