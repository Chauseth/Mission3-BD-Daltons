/* Composant gérant la recherche des BDs et leur affichage */

import React from "react";
import { series } from "./data/series";
import { albums } from "./data/albums";
import { auteurs } from "./data/auteurs";
import BD from "./BD";

const Filters = (props) => {
  //Variable contenant les résultats de la recherche
  const resultFilters = [];
  //Vérification si le champ de saisie "Titre/Série" est vide
  if (props.input.match(/\S+/)) {
    for (let indexAlbums = 0; indexAlbums < albums.length; indexAlbums++) {
      for (let indexSeries = 0; indexSeries < series.length; indexSeries++) {
        if (
          albums[indexAlbums].titre
            .toLowerCase()
            .includes(props.input.toLowerCase()) ||
          (series[indexSeries].nom
            .toLocaleLowerCase()
            .includes(props.input.toLowerCase()) &&
            albums[indexAlbums].idSerie === series[indexSeries].id)
        ) {
          //Vérification si l'entrée n'est pas déjà prise en compte
          if (
            !resultFilters.some((e) => e.titre === albums[indexAlbums].titre)
          ) {
            resultFilters.push(albums[indexAlbums]);
          }
        }
      }
    }
    //Vérification si le champ de saisie "Auteur" est vide
  } else if (props.author.match(/\S+/)) {
    for (let indexAlbums = 0; indexAlbums < albums.length; indexAlbums++) {
      for (
        let indexAuteurs = 0;
        indexAuteurs < auteurs.length;
        indexAuteurs++
      ) {
        if (
          auteurs[indexAuteurs].nom
            .toLowerCase()
            .includes(props.author.toLowerCase()) &&
          albums[indexAlbums].idAuteur === auteurs[indexAuteurs].id
        ) {
          //Vérification si l'entrée n'est pas déjà prise en compte
          if (
            !resultFilters.some((e) => e.titre === albums[indexAlbums].titre)
          ) {
            resultFilters.push(albums[indexAlbums]);
          }
        }
      }
    }
    //Condition si aucune recherche (affichage de toutes les BDs)
  } else {
    for (let indexAlbums = 0; indexAlbums < albums.length; indexAlbums++) {
      resultFilters.push(albums[indexAlbums]);
    }
  }

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {/* Envoi pour chaque entrée suite au filtre d'un composant BD (props key pour éviter les erreurs console)*/}
      {resultFilters.map((id) => (
        <BD
          titre={id.titre}
          numero={id.numero}
          idSerie={id.idSerie}
          idAuteur={id.idAuteur}
          prix={id.prix}
          key={Math.random()}
        />
      ))}
    </div>
  );
};
export default Filters;
