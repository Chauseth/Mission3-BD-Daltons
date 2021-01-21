import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { series } from "./data/series";
import BoutonAcheter from "./boutonAcheter";

const BD = (props) => {
  const pathBD = "./img/albumsMini/";

  const nameSerie = series.find((serie) => {
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
      <Card.Body className=" d-flex flex-column  align-items-center text-center">
        <Card.Title>{props.titre}</Card.Title>
        <Card.Text>{props.prix} €</Card.Text>
      </Card.Body>
      <Card.Footer>
        <BoutonAcheter album={props} serie={nameSerie.nom} />
      </Card.Footer>
    </Card>
  );
};

export default BD;
