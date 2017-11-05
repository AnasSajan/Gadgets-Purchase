import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseScales from './CourseScales';
import Clicker from './Clicker.js';
import Footer from './Footer.js';




class App extends Component {
  render() {
    var courses = [
      { name: 'DELL INSPIRON 7567', price: 93499 },
      { name: 'MAC AIR', price: 110599 },
      { name: 'ASUS ROG', price: 95999 },
      { name: 'DELL ALIENWARE', price: 150599 }
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Gadgets Purchase Page</h1>
        </div>
        <CourseScales items={courses}/>
        <Footer />


      </div>
    );
  }
}

export default App;
