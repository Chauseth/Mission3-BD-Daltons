import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Filters from "./Filters";

const Search = (props) => {
  const [input, setInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  return (
    <div className="BDS d-flex flex-column flex-wrap">
      <Form className="formclass d-flex  flex-column mx-auto mt-3 justify-content-center">
        <input
          placeholder="Titre/Série"
          className="text-center mb-3 focus"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          placeholder="Auteur"
          className="text-center mb-3 focus"
          onChange={(e) => setAuthorInput(e.target.value)}
        />
      </Form>

      <Filters input={input} author={authorInput} />
    </div>
  );
};

export default Search;
