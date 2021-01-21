/* Gestion de l'affichage d'une entrée dans le panier */

import { series } from "./data/series";
import { useState } from "react";

const ItemPanier = (props) => {
  const [qty, setQty] = useState(1);

  //Création du chemin de l'image pour la vignette
  const pathBD = "./img/albumsMini/";
  const nameSerie = series.find((serie) => {
    if (serie.id === props.idSerie) {
      return serie;
    }
    return false;
  });
  //Suppression caractères spéciaux
  const cleanName = props.titre.replace(/'|!|\?|\.|"|:|\$|\s/g, "");
  const cleanSerie = nameSerie.nom.replace(/'|!|\?|\.|"|:|\$|\s/g, "");

  //Stockage du chemin de l'image dans cleanPath
  const cleanPath =
    pathBD + cleanSerie + "-" + props.numero + "-" + cleanName + ".jpg";

  return (
    <tr>
      <td className="tdImage">
        <img src={cleanPath} alt={props.titre} />
      </td>
      <td className="d-flex flex-column tdPanier">
        {props.titre}
        {/* Boutons pour gérer la quantité de l'item dans le panier*/}
        <div>
          <button onClick={() => setQty(qty - 1)}>-</button>
          <input
            type="text"
            className="qtyInput"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
      </td>
      <td>{props.prix * qty}</td>
    </tr>
  );
};
export default ItemPanier;
