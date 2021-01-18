import React, { Component } from "react";
import { albums } from "./data/albums";
import BD from "./BD";

class BDS extends Component {
  render() {
    return (
      <div className="BDS d-flex flex-wrap justify-content-around">
        {albums.map((id) => (
          <BD
            titre={id.titre}
            numero={id.numero}
            idSerie={id.idSerie}
            idAuteur={id.idAuteur}
            prix={id.prix}
          />
        ))}
      </div>
    );
  }
}

export default BDS;
