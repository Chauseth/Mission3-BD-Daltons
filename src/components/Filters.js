import React from "react";
import { series } from "./data/series";
import { albums } from "./data/albums";
import { auteurs } from "./data/auteurs";
import BD from "./BD";

const Filters = (props) => {
  const resultFilters = [];
  if (props.input.match(/\S+/)) {
    for (let indexAlbums = 0; indexAlbums < albums.length; indexAlbums++) {
      for (let indexSeries = 0; indexSeries < series.length; indexSeries++) {
        if (
          albums[indexAlbums].titre.includes(props.input) ||
          (series[indexSeries].nom.includes(props.input) &&
            albums[indexAlbums].idSerie === series[indexSeries].id)
        ) {
          if (
            !resultFilters.some((e) => e.titre === albums[indexAlbums].titre)
          ) {
            resultFilters.push(albums[indexAlbums]);
          }
        }
      }
    }
  } else if (props.author.match(/\S+/)) {
    for (let indexAlbums = 0; indexAlbums < albums.length; indexAlbums++) {
      for (
        let indexAuteurs = 0;
        indexAuteurs < auteurs.length;
        indexAuteurs++
      ) {
        if (
          albums[indexAlbums].titre
            .toLowerCase()
            .includes(props.author.toLowerCase()) ||
          (auteurs[indexAuteurs].nom
            .toLowerCase()
            .includes(props.author.toLowerCase()) &&
            albums[indexAlbums].idAuteur === auteurs[indexAuteurs].id)
        ) {
          if (
            !resultFilters.some((e) => e.titre === albums[indexAlbums].titre)
          ) {
            resultFilters.push(albums[indexAlbums]);
          }
        }
      }
    }
  } else {
    for (let indexAlbums = 0; indexAlbums < albums.length; indexAlbums++) {
      resultFilters.push(albums[indexAlbums]);
    }
  }

  console.log(props);
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
