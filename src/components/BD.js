import React from "react";
import Card from "react-bootstrap/Card";
import Panier from "./Panier"
import Button from "react-bootstrap/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { series } from "./data/series";
import Modale from "./Modale";
import VignetteModale from "./VignetteModale";

const BD = props => {
  const pathBD = "./img/albumsMini/";

  const nameSerie = series.find(serie => {
    if (serie.id === props.idSerie) {
      return true;
    }
    return false;
  });

  const cleanName = props.titre.replace(/'|!|\?|\.|"|:|\$|\s/g, "");
  const cleanSerie = nameSerie.nom.replace(/'|!|\?|\.|"|:|\$|\s/g, "");
  const cleanPath =
    pathBD + cleanSerie + "-" + props.numero + "-" + cleanName + ".jpg";
  return (
    <Card className="mt-5">
      <Card.Img variant="top" src={cleanPath} />
      <Card.Body
        id="card-body"
        className="bg-dark d-flex flex-column  align-items-md-center"
      >
        <Card.Title id="set-title">{props.titre}</Card.Title>
        <Card.Text id="set-text">{props.prix} €</Card.Text>
      </Card.Body>
<<<<<<< HEAD
      <Card.Footer>
        <Button id="buttonBuy" onClick={() => onAdd(props)} >
=======
      <Card.Footer id="set-carFooter">
        <Button id="buttonBuy">
>>>>>>> 083d0d37074ab9c318ac769b90d40b0178c804e9
          <FaCartArrowDown />{" "}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default BD;
