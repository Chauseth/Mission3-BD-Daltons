
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ItemPanier from './ItemPanier'
import {useState} from 'react';

const Panier = (props) => {
    
    const [lgShow, setLgShow] = useState(false);
    return (
    <div>
        
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
                            <td colSpan="2">Total HT</td>
                            <td>  €</td>
                        </tr>
                        <tr>
                            <td colSpan="2">TVA</td>
                            <td > €</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Frais de livraison</td>
                            <td >  €</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Total TTC</td>
                            <td > €</td>
                        </tr>
                    </tbody>
                    </Table>
            <ItemPanier/>
        </Modal.Body>
       
    </Modal>
</div>
    )
 }
 export default Panier;