import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Filters from "./Filters";

const Search = (props) => {
  const [input, setInput] = useState("");

  return (
    <div className="BDS d-flex flex-column flex-wrap">
      <Form className="formclass d-flex justify-content-center ">
        <Form.Group>
          <input
            placeholder="Titre"
            className="text-center mb-3"
            onChange={(e) => setInput(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Filters input={input} />
    </div>
  );
};

export default Search;
