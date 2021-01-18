import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class Filters extends Component {
  render() {
    return (
      <div className="Filters p-3">
        <h3 className="text-center">Recherche</h3>
        <Form className="formclass d-flex justify-content-center ">
          <Form.Group>
            <Form.Control
              size="sm"
              placeholder="Titre"
              className="text-center mb-3"
            />
            <Form.Control
              size="sm"
              placeholder="Auteur"
              className="text-center"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Filters;
