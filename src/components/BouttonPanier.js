import Panier from "./Panier"
import {useState} from 'react';

const BouttonPanier = (props) => {
    const [lgShow, setLgShow] = useState(false);
    const [pdtAjoute, setPdtAjoute] = useState([]);
    const onAdd = (pdt) => {
        const exist = pdtAjoute.find((x) => x.id === pdt.id);

        if (exist) {
        setPdtAjoute(
            pdtAjoute.map((x) => x.id === pdt.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
        } else {
        setPdtAjoute([...pdtAjoute, { ...pdt, qty: 1 }]);
        }
    };

    const onRemove = (pdt) => {
        const exist = pdtAjoute.find((x) => x.id === pdt.id);

        if (exist.qty === 1) {
        setPdtAjoute(pdtAjoute.filter((x) => x.id !== pdt.id));
        } else {
        setPdtAjoute(
            pdtAjoute.map((x) =>
            x.id === pdt.id ? { ...exist, qty: exist.qty - 1 } : x
            )
        );
        }
    }
        return (
            <div>
            
                 <Panier
                pdtAjoute = {pdtAjoute}
                onAdd= {onAdd} 
                onRemove = {onRemove}
                 />
            </div>
        )
}

export default BouttonPanier;
