/* Composant gérant l'action du bouton acheter présent sur les cartes et sur les descriptions des BD */

import React from "react";
import { tableaupanier } from "./TableauPanier";

//Ajout des données de l'album dans le tableau
const BoutonAcheter = (props) => {
  const buySomething = (album) => {
    tableaupanier.push(album);
  };

  return (
    <div>
      <button onClick={() => buySomething(props.album)} id="buttonBuy">
        Acheter
      </button>
    </div>
  );
};

export default BoutonAcheter;
