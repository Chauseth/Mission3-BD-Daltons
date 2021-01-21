import { series } from "./data/series";

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

  return (
    <tr>
      <td>
        <img src={cleanPath} />
      </td>
      <td>{props.titre}</td>
      <td>{props.prix} €</td>
    </tr>
  );
};
export default ItemPanier;
