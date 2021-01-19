import React, { Component } from "react";
import Header from "./components/Header";
import Carroussel from "./components/Caroussel";
import Filters from "./components/Filters";
import Search from "./components/Search";
import BDS from "./components/BDs";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App p-0 text-white">
        <Header  />
        <Carroussel />
        <div>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
