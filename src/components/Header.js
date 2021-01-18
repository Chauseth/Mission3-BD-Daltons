import { ReactComponent as Menu } from "./svg/view_headline.svg";
import { ReactComponent as Panier } from "./svg/buy_absolute.svg";
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';

export default (props) => {

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
      <div className="Header">
        <Navbar className = "d-flex justify-content-between ">
                <Col xs={6} md={3} lg={2}>
                    <Image src="/img/Logo.png" roundedCircle className="img-fluid"/>
                </Col>
                <Col xs={6} md={3} lg={7} className="d-lg-flex justify-content-center">
                    <h1 className=" d-none d-md-inline-flex d-lg-flex">Les BD's Edouard</h1>
                </Col>
                
                <Col xs={6} md={3} lg={3} className = "d-flex justify-content-around" >
                    <Navbar.Brand >
                        <p>Qui suis-je?</p>
                    </Navbar.Brand>
       
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
                    <Navbar.Brand href="#home">
                     <Button onClick={() => setLgShow(true)}>
                      <Panier/>
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
                </Col>
            </Navbar>
        {/* <Menu />
        <img src="" alt=""></img>
        <h1 className="d-none">Le site de BD</h1>

        <Panier /> */}
      </div>
    );
  }



