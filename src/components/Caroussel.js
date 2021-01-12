import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
/* import Image from 'react-bootstrap/Image'; */
import Image1 from "./img/albums/Astérix-35-Astérix chez les Pictes.jpg";
import Image2 from "./img/albums/Blacksad-01-Quelque part entre les ombres.jpg";
import Image3 from "./img/albums/Elfes-01-Le crystal des Elfes bleus.jpg";


class Caroussel extends Component {


    render() {
        return (
          <Carousel>
              <Carousel.Item interval={1000}>
                  <img className="d-block w-100 " src={Image1} alt="" />
                  <Carousel.Caption>
                      <h3 className = "text-dark">Première BD</h3>
                      <p className = "text-dark">Elle est très bien !</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                  <img className="d-block w-100" src={Image2} alt="" />
                  <Carousel.Caption>
                      <h3>Deuxième BD</h3>
                      <p>Elle est très bien aussi !</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                  <img className="d-block w-100" src={Image3} alt="" />
                  <Carousel.Caption>
                      <h3>Troisième BD</h3>
                      <p>Celle-ci c'est la meilleure !</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>

         
        );
      }
      
}

export default Caroussel;