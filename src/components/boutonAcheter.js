import React from "react";
import { useState } from "react";
import { tableaupanier } from "./TableauPanier";
import Panier from "./Panier";

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
