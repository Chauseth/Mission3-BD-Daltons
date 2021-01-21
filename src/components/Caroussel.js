import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Caroussel extends Component {
  render() {
    return (
      <Carousel className="p-5 ">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 "
            src="/img/albums/Astérix-08-AstérixchezlesBretons.jpg"
            alt=""
          />
          <Carousel.Caption className="text-center p-3">
            <h3>Première BD</h3>
            <p>Elle est très bien !</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/img/albums/Blacksad-01-Quelquepartentrelesombres.jpg"
            alt=""
          />
          <Carousel.Caption className="text-center p-3">
            <h3>Deuxième BD</h3>
            <p>Elle est très bien aussi !</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/img/albums/Divers-00b-BilboleHobbit.jpg"
            alt=""
          />
          <Carousel.Caption className="text-center p-3">
            <h3>Troisième BD</h3>
            <p>Celle-ci est la meilleure !</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Caroussel;
