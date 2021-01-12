import React, { Component } from 'react';
import Header from './components/Header';
import Carroussel from './components/Caroussel'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




class App extends Component {

    state = {
    titre : "Mon catalogue"
  }

  render() {
    return (
      <div className="App container-fluid p-0">
        <Header />
        <Carroussel />
      </div>
    );
  }
  
}

export default App;
