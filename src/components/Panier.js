
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react';
export default (props) => {
    
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
        <p> votre panier est vide</p>
        </Modal.Body>
        <Modal.Footer>
        Total :
        </Modal.Footer>
    </Modal>
    </Navbar.Brand>
    )
 }