 import { series } from "./data/series";
 import { tableaupanier } from "./TableauPanier";
 import { useState } from "react";
 const ItemPanier = (props) => {
   
   const pathBD = "./img/albumsMini/";
   const nameSerie = series.find((serie) => {
     if (serie.id === props.idSerie) {
       return true;
     }
     return false;
   });
   const cleanName = props.titre.replace(/'|!|\?|\.|"|:|\$|\s/g, "");
   const cleanSerie = nameSerie.nom.replace(/'|!|\?|\.|"|:|\$|\s/g, "");
   const cleanPath =
     pathBD + cleanSerie + "-" + props.numero + "-" + cleanName + ".jpg";
        const [qty, setQty]= useState(1);
        
        

     const prixPdt= tableaupanier.reduce((a, c) =>  a + c.qty * c.prix, 0 );
    const taxAjoute = prixPdt * 0.19;
    const coutLivraison = prixPdt > 50 ? 0 :  5;
    const prixTotal = prixPdt + taxAjoute + coutLivraison;
   return ( 
        <tr>
        <td><img src={cleanPath} /> </td>
       <td>
         {props.titre} 
         <button  onClick={ () =>setQty(qty - 1) }>
                 -
         </button>{' '}
         <button onClick={ () => setQty(qty + 1)}>
                 +
             </button>
             <div>{qty}</div>
         
         
         </td>
         <td>{props.prix * qty}</td>
         </tr>
       
     
   );
 };
 export default ItemPanier;