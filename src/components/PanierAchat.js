// import { albums } from "./data/albums";
// import {useState} from 'react';
// import Panier from './Panier';
// export default (props) => {
//     const onAdd = (pdt) => {
//         const exist = pdtAjoute.find((x) => x.id === pdt.id);
//         if (exist) {
//           setPdtAjoute(
//             pdtAjoute.map((x) =>
//               x.id === pdt.id ? { ...exist, qty: exist.qty + 1 } : x
//             )
//           );
//         } else {
//           setPdtAjoute([...pdtAjoute, { ...pdt, qty: 1 }]);
//         }
//       };
//       const onRemove = (pdt) => {
//         const exist = pdtAjoute.find((x) => x.id === pdt.id);
//         if (exist.qty === 1) {
//           setPdtAjoute(pdtAjoute.filter((x) => x.id !== pdt.id));
//         } else {
//           setPdtAjoute(
//             pdtAjoute.map((x) =>
//               x.id === pdt.id ? { ...exist, qty: exist.qty - 1 } : x
//             )
//           );
//         }
//       }
//     const { pdtAjoute, onAdd, onRemove } = props;
//     return (
//         <Panier pdtAjoute ={pdtAjoute} onAdd={onAdd} onRemove={onRemove}></Panier>
//     )
// }




// const { pdtAjoute, onAdd, onRemove } = props;
//      console.log(onAdd)
//     



     {/* <div>
                 <div className="BDS d-flex flex-wrap justify-content-around">
                    {albumsBd.map((pdt) => (
                    <div
                        titre={pdt.titre}
                        numero={pdt.numero}
                        idSerie={pdt.idSerie}
                        idAuteur={pdt.idAuteur}
                        prix={pdt.prix}
                       
                    >
                        <Card className="mt-5">
                            <Card.Img variant="top" src="/img/albumsMini/Astérix-08-AstérixchezlesBretons.jpg" />
                            <Card.Body className="bg-dark">
                                <Card.Title>{pdt.titre}</Card.Title>
                                <Card.Text>{pdt.prix} €</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button id="buttonBuy" onClick={() => onAdd(pdt)}>
                                <FaCartArrowDown />{" "}
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    ))}
                </div>
            </div> */}




             {/* <div className="row">
                  <div >prix HT</div>
                  <div className=" text-right">{prixPdt.toFixed(2)} €</div>
                </div>
                <div className="row">
                  <div>TVA</div>
                  <div className=" text-right">{taxAjoute.toFixed(2)} €</div>
                </div>
                <div className="row">
                  <div>Frais de livraison</div>
                  <div className="text-right">
                    {coutLivraison.toFixed(2)} €
                  </div>
                </div>
    
                <div className="row">
                  <div className="col-2">
                    <strong>prix Total : </strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>{prixTotal.toFixed(2)} €</strong>
                  </div>
                </div> */}
                