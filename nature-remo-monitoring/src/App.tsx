import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Tabletop = require("tabletop")

class App extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1SXP5jzntFwDt56UPCEskvvcyidql7ZU4alXO5XiY9nc/edit?usp=sharing',
      simpleSheet: true
    }).then((googleData: any, tabletop: any) => {
      console.log('google sheet data --->', googleData)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
      </div>
    );
  }
}


export default App;
