import React, { Component } from "react";
import Header from "./components/Header";
import Carroussel from "./components/Caroussel";
import Filters from "./components/Filters";
import BDS from "./components/BDs";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  state = {
    titre: "Mon catalogue",
  };

  render() {
    return (
      <div className="App p-0 text-white">
        <Header />
        <Carroussel />
        <div>
          <Filters />
          <BDS />
        </div>
      </div>
    );
  }
}

export default App;
