
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Panier from './Panier';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';

export default (props) => {

    const [smShow, setSmShow] = useState(false);
    

    return (
      <div className="Header">
        <Navbar className = "d-flex justify-content-between ">
                    <Button onClick={() => setSmShow(true)} className =" bg-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </Button>
            
                    <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                            login
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="3">
                                    Email
                                </Form.Label>
                                <Col sm="9">
                                <Form.Control type = "email"   placeholder="email@example.com" />
                                </Col>
                                </Form.Group>    
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="3">
                                    Password
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                    </Modal>
                  <Panier></Panier>
                
            </Navbar>
        {/* <Menu />
        <img src="" alt=""></img>
        <h1 className="d-none">Le site de BD</h1>

        <Panier /> */}
      </div>
    );
  }



