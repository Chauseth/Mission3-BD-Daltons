import Table from 'react-bootstrap/Table';
import {useState} from 'react';
const ItemPanier = (props) => {
    const { onAdd, onRemove } = props;
    const [pdtAjoute, setPdtAjoute] = useState([]);
    const prixPdt= pdtAjoute.reduce((a, c) =>  a + c.qty * c.prix, 0 );
    const taxAjoute = prixPdt * 0.19;
    const coutLivraison = prixPdt > 50 ? 0 :  5;
    const prixTotal = prixPdt + taxAjoute + coutLivraison;
    return (
        <div>
            {/* {pdtAjoute.length === 0 && <div> votre panier est vide</div>}
            {pdtAjoute.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.titre}</div>
                    <div className="col-2">
                        <button  onClick={() => onRemove(item)}>
                            -
                        </button>{' '}
                        <button onClick={() => onAdd(item)}>
                            +
                        </button>
                    </div>
                    <div className="col-2 text-right" >
                        {item.qty} x {item.prix.toFixed(2)} €
                    </div>
                   
              </div>
            ))}
         */}
            {/* {pdtAjoute.length !== 0 && ( */}
                <Table striped bordered hover>
                <thead>
                        <tr>
                            <th>Produits</th>
                            <th>Nom de produit</th>
                            <th>prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img  /></td>
                            <td></td>
                            <td> €</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Total HT</td>
                            <td> {prixPdt.toFixed(2)} €</td>
                        </tr>
                        <tr>
                            <td colSpan="2">TVA</td>
                            <td >{taxAjoute.toFixed(2)} €</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Frais de livraison</td>
                            <td > {coutLivraison.toFixed(2)} €</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Total TTC</td>
                            <td >{prixTotal.toFixed(2)} €</td>
                        </tr>
                    </tbody>
                </Table>
                
            {/* )} */}
        </div>
    )
}
export default ItemPanier;