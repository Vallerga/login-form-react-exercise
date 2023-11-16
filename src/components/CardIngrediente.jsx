import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dbBasilicoContext } from "../App";
import { indice } from "../App";

const CardIngrediente = () => {
  let dbBasilico = useContext(dbBasilicoContext);
  let indiceCard = useContext(indice);

  return (
    <>
      <div className="position-relative d-flex align-items-center justify-content-center pt-5">
        <img className="position-absolute imgFullScreen" src={require("../assets/pesto.jpg")} alt="pesto" />
        <Card className="w-25 text-center">
          <Card.Header>{dbBasilico[indiceCard].ingrediente} {indiceCard}</Card.Header>
          <Card.Body>
            <Card.Title>{dbBasilico[indiceCard].quantità} - {dbBasilico[indiceCard].prezzo}</Card.Title>
            <Card.Text className="justifyCSS">
              {dbBasilico[indiceCard].descrizione}
            </Card.Text>
            <Link to={"/PestoGenovese"}><Button className="mt-3" type="button">Indietro</Button></Link>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default CardIngrediente;