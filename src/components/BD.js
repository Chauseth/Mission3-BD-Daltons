import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaCartArrowDown } from "react-icons/fa";
import { series } from "./data/series";

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
      <Card.Body className="bg-dark">
        <Card.Title>{props.titre}</Card.Title>
        <Card.Text>{props.prix} €</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button id="buttonBuy">
          <FaCartArrowDown />{" "}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default BD;
