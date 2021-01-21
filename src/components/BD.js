import React from "react";
import Card from "react-bootstrap/Card";
import { series } from "./data/series";
import BoutonAcheter from "./boutonAcheter";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const BD = props => {
  const pathBD = "./img/albumsMini/";
  const pathFullBD = "./img/albums/";

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
  const cleanFullPath =
    pathFullBD + cleanSerie + "-" + props.numero + "-" + cleanName + ".jpg";

  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Card className="mt-5 focus">
        <Card.Img
          variant="top"
          src={cleanPath}
          onClick={() => setLgShow(true)}
        />
        <Card.Body className=" d-flex flex-column  align-items-center text-center">
          <Card.Title>{props.titre}</Card.Title>
          <Card.Text>{props.prix} €</Card.Text>
        </Card.Body>
        <Card.Footer>
          <BoutonAcheter album={props} className="boutonPanier" />
        </Card.Footer>
      </Card>
      {/* Gestion affichage modale img BD */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.titre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={cleanFullPath} />
        </Modal.Body>
        <Modal.Footer className="pull-left fw-bold">Total :</Modal.Footer>
      </Modal>
    </>
  );
};

export default BD;
