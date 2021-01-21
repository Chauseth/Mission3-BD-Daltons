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