import Table from 'react-bootstrap/Table';
import {useState} from 'react';
const ItemPanier = (props) => {
    // const { onAdd, onRemove } = props;
    // const [pdtAjoute, setPdtAjoute] = useState([]);
    // const prixPdt= pdtAjoute.reduce((a, c) =>  a + c.qty * c.prix, 0 );
    // const taxAjoute = prixPdt * 0.19;
    // const coutLivraison = prixPdt > 50 ? 0 :  5;
    // const prixTotal = prixPdt + taxAjoute + coutLivraison;
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
                
                    
                        <tr>
                            <td><img  /></td>
                            <td></td>
                            <td> €</td>
                        </tr>
                        
                   
                
            {/* )} */}
        </div>
    )
}
export default ItemPanier;