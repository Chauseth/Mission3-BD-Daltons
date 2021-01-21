/* Composant gérant le panier, avec une modale*/

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import ItemPanier from "./ItemPanier";
import { useState } from "react";
import { tableaupanier } from "./TableauPanier";

const Panier = (props) => {
  // Permet de trigger l'affichage de la modale
  const [lgShow, setLgShow] = useState(false);

  return (
    <Navbar.Brand href="#home">
      <Button onClick={() => setLgShow(true)}>Panier</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Votre Panier
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Vérification de la taille du panier  */}
          {tableaupanier.length === 0 && <div> votre panier est vide</div>}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Produits</th>
                <th>Nom de produit</th>
                <th>prix</th>
              </tr>
            </thead>
            <tbody>
              {/* Vérification de chaque entrée du panier pour affichage du composant ItemPanier*/}
              {tableaupanier.map((index) => {
                console.log(index);
                return (
                  <ItemPanier
                    titre={index.titre}
                    prix={index.prix}
                    idSerie={index.idSerie}
                    numero={index.numero}
                    idAuteur={index.idAuteur}
                  />
                );
              })}

              <tr>
                <td colSpan="2">Total HT</td>
              </tr>
              <tr>
                <td colSpan="2">TVA</td>
                <td> €</td>
              </tr>
              <tr>
                <td colSpan="2">Frais de livraison</td>
                <td> €</td>
              </tr>
              <tr>
                <td colSpan="2">Total TTC</td>
                <td> €</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer className="pull-left fw-bold">Total :</Modal.Footer>
      </Modal>
    </Navbar.Brand>
  );
};

export default Panier;
