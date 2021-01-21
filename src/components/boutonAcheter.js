import React from "react";
import { useState } from "react";
import { tableaupanier } from "./TableauPanier";
import Panier from "./Panier";

const BoutonAcheter = (props) => {
  const buySomething = (album) => {
    const indexDoublon = tableaupanier.findIndex(
      (album) => props.titre === tableaupanier[album].titre
    );
    console.log(indexDoublon);
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
