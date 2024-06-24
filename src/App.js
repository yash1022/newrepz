import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import News from './components/News';

class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <Heading />
        <News />
      </div>
    );
  }
}

export default App;
