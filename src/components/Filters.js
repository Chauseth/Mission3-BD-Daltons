import React from "react";
import { series } from "./data/series";
import { albums } from "./data/albums";
import BD from "./BD";

const Filters = (props) => {
  const resultFilters = [];
  for (let indexAlbums = 0; indexAlbums < albums.length; indexAlbums++) {
    for (let indexSerie = 0; indexSerie < series.length; indexSerie++) {
      if (
        albums[indexAlbums].idSerie === series[indexSerie].id &&
        series[indexSerie].nom.includes(props.input)
      ) {
        console.log("IdSerie = IdAlbum et Include Input");
        resultFilters.push(albums[indexAlbums]);
      }
    }
  }

  console.log(resultFilters);

  return (
    <div className="d-flex flex-wrap justify-content-around">
       
      {resultFilters.map((id) => (
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
};
export default Filters;
