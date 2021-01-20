
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
            <ItemPanier/>
        </Modal.Body>
       
    </Modal>
</div>
    )
 }
 export default Panier;