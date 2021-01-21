/* Composant gérant l'affichage d'une BD résultant d'une recherche*/

import React from "react";
import Card from "react-bootstrap/Card";
import { series } from "./data/series";
import BoutonAcheter from "./boutonAcheter";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const BD = (props) => {
  //Création du chemin de l'image pour la vignette
  const pathBD = "./img/albumsMini/";
  const pathFullBD = "./img/albums/";

  const nameSerie = series.find((serie) => {
    if (serie.id === props.idSerie) {
      return true;
    }
    return false;
  });

  //Suppression caractères spéciaux et espaces
  const cleanName = props.titre.replace(/'|!|\?|\.|"|:|\$|\s/g, "");
  const cleanSerie = nameSerie.nom.replace(/'|!|\?|\.|"|:|\$|\s/g, "");

  //Stockage du chemin de l'image dans cleanPath
  const cleanPath =
    pathBD + cleanSerie + "-" + props.numero + "-" + cleanName + ".jpg";
  const cleanFullPath =
    pathFullBD + cleanSerie + "-" + props.numero + "-" + cleanName + ".jpg";

  //Toggle pour afficher/cacher la modale
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Card className="mt-5 focus border-0">
        {/* Affichage de la modale lors du clic sur l'image */}
        <Card.Img
          variant="top"
          src={cleanPath}
          onClick={() => setLgShow(true)}
        />
        {/* Affichage des infos de la BD (sur la carte) */}
        <Card.Body className=" d-flex flex-column  align-items-center text-center">
          <Card.Title>{props.titre}</Card.Title>
          <Card.Text>{props.prix} €</Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* */}
          <BoutonAcheter album={props} className="boutonPanier" />
        </Card.Footer>
      </Card>
      {/* Gestion affichage modale img BD */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="BodyModal">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h1>{props.titre}</h1>
          <img src={cleanFullPath} alt={props.titre} />
          <p className="loremText">
            lorem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            eu est urna. Duis a massa quam. Donec sed laoreet ante, at blandit
            purus. Fusce sit amet elit nisl. Etiam sed purus mattis, molestie
            augue non, euismod libero. Curabitur tempus nisl lacus, in tincidunt
            lorem ultricies ut. Nullam vitae arcu in arcu lacinia vehicula ac at
            risus.{" "}
          </p>
          <h5>Ajouter au panier</h5>
          <div className="d-flex">
            <h3>{props.prix} €</h3>
            <BoutonAcheter album={props} className="boutonPanier" />
          </div>
        </Modal.Body>
        {/* <Modal.Footer className="pull-left fw-bold">Total :</Modal.Footer> */}
      </Modal>
    </>
  );
};

export default BD;
