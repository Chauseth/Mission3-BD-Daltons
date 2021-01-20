import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Filters from "./Filters";

const Search = props => {
  const [input, setInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  return (
    <div className="BDS d-flex flex-column flex-wrap">
<<<<<<< HEAD
      <Form className="formclass d-flex justify-content-center ">
        <Form.Group className="d-flex flex-column flex-md-row">
          <input
            placeholder="Titre"
            className="text-center mb-3"
            onChange={e => setInput(e.target.value)}
          />
          <input
            placeholder="Auteur"
            className="text-center mb-3"
            onChange={e => setAuthorInput(e.target.value)}
          />
        </Form.Group>
=======
      <Form className="formclass d-flex  flex-column mx-auto mt-3 justify-content-center ">
        <input
          placeholder="Titre/Série"
          className="text-center mb-3"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          placeholder="Auteur"
          className="text-center mb-3"
          onChange={(e) => setAuthorInput(e.target.value)}
        />
>>>>>>> 6d3d61877e01f0c33a98401e4ac01797a04a461d
      </Form>

      <Filters input={input} author={authorInput} />
    </div>
  );
};

export default Search;
