
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

import { FaCartArrowDown } from "react-icons/fa";
import {useState} from 'react';
export default (props) => {
    const albumsBd = [
        {
          titre: "Croc vert",
          numero: "23",
          idSerie: "6",
          idAuteur: "13",
          prix: "24.50"
        },
        {
          titre: "Machine qui rêve",
          numero: "46",
          idSerie: "2",
          idAuteur: "14",
          prix: "23.50"
        },
        {
          titre: "La guerre des gloutons (II)",
          numero: "13",
          idSerie: "16",
          idAuteur: "11",
          prix: "14.50"
        }]
    const [pdtAjoute, setPdtAjoute] = useState([]);
    const onAdd = (pdt) => {
        const exist = pdtAjoute.find((x) => x.id === pdt.id);
        if (exist) {
          setPdtAjoute(
            pdtAjoute.map((x) =>
              x.id === pdt.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setPdtAjoute([...pdtAjoute, { ...pdt, qty: 1 }]);
        }
      };
      const onRemove = (pdt) => {
        const exist = pdtAjoute.find((x) => x.id === pdt.id);
        if (exist.qty === 1) {
          setPdtAjoute(pdtAjoute.filter((x) => x.id !== pdt.id));
        } else {
          setPdtAjoute(
            pdtAjoute.map((x) =>
              x.id === pdt.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      }

    
    const prixPdt= pdtAjoute.reduce((a, c) =>  a + c.qty * c.prix, 0 );
    const taxAjoute = prixPdt * 0.19;
    const coutLivraison = prixPdt > 50 ? 0 :  5;
    const prixTotal = prixPdt + taxAjoute + coutLivraison;

    const [lgShow, setLgShow] = useState(false);
    return (
    <Navbar.Brand href="#home">
        
    <Button onClick={() => setLgShow(true)}>
    Panier
    </Button>
    <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
            Votre Panier 
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                 <div className="BDS d-flex flex-wrap justify-content-around">
                    {albumsBd.map((pdt) => (
                    <div
                        titre={pdt.titre}
                        numero={pdt.numero}
                        idSerie={pdt.idSerie}
                        idAuteur={pdt.idAuteur}
                        prix={pdt.prix}
                       
                    >
                        <Card className="mt-5">
                            <Card.Img variant="top" src="/img/albumsMini/Astérix-08-AstérixchezlesBretons.jpg" />
                            <Card.Body className="bg-dark">
                                <Card.Title>{pdt.titre}</Card.Title>
                                <Card.Text>{pdt.prix} €</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="buttonBuy" onClick={() => onAdd(pdt)}>
                                <FaCartArrowDown />{" "}
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    ))}
                </div>
            </div>
            {pdtAjoute.length === 0 && <div> votre panier est vide</div>}
            {pdtAjoute.map((pdt) => (
                <div key={pdt.id} className="row">
                    <div >{pdt.titre}</div>
                    <div >
                        <button  onClick={() => onRemove(pdt)}>
                            -
                        </button>{' '}
                        <button onClick={() => onAdd(pdt)}>
                            +
                        </button>
                    </div>
                   
              </div>
            ))}

            {pdtAjoute.length !== 0 && (
                <>
               <Table striped bordered hover>
               <thead>
                    <tr>
                        <th>Produits</th>
                        <th>Nom de produit</th>
                        <th>prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/img/albumsMini/Astérix-08-AstérixchezlesBretons.jpg" /></td>
                        <td> titre </td>
                        <td>prix  €</td>
                    </tr>
                </tbody>
                <tfooter>
                    <tr>
                        <td colSpan="2">Total HT</td>
                        <td colSpan="2">{prixPdt.toFixed(2)} €</td>
                    </tr>
                    <tr>
                        <td colSpan="2">TVA</td>
                        <td colSpan="2">{taxAjoute.toFixed(2)} €</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Frais de livraison</td>
                        <td colSpan="2"> {coutLivraison.toFixed(2)} €</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total TTC</td>
                        <td colSpan="2"> {prixTotal.toFixed(2)} €</td>
                    </tr>
                </tfooter>
               </Table>
                <div className="row">
                  <div >prix HT</div>
                  <div className=" text-right">{prixPdt.toFixed(2)} €</div>
                </div>
                <div className="row">
                  <div>TVA</div>
                  <div className=" text-right">{taxAjoute.toFixed(2)} €</div>
                </div>
                <div className="row">
                  <div>Frais de livraison</div>
                  <div className="text-right">
                    {coutLivraison.toFixed(2)} €
                  </div>
                </div>
    
                <div className="row">
                  <div className="col-2">
                    <strong>prix Total : </strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>{prixTotal.toFixed(2)} €</strong>
                  </div>
                </div>
                
                
              </>
            )}


        
        </Modal.Body>
        <Modal.Footer className ="pull-left fw-bold">
             Total :
        </Modal.Footer>
    </Modal>
    </Navbar.Brand>
    )
 }