import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { arrContext,} from "../App";

const CardIngrediente = () => {  
  let multipleValContext = useContext(arrContext);
  
  return (
    <>
      <div className="position-relative d-flex align-items-center justify-content-center heightSett pt-5 text-dark">
        <img className="position-absolute imgFullScreen" src={multipleValContext[0][multipleValContext[2]].img} alt="pesto" />
        <Card className="w-25 text-center indexSett">
          <Card.Header className="fs-1 text-uppercase text-dark">{multipleValContext[0][multipleValContext[2]].ingrediente}</Card.Header>
          <Card.Body>
            <Card.Title className="fs-3 fw-bold text-primary">{multipleValContext[0][multipleValContext[2]].quantita} - {multipleValContext[0][multipleValContext[2]].prezzo}</Card.Title>
            <Card.Text className="justifyCSS fs-4">
              {multipleValContext[0][multipleValContext[2]].descrizione}
            </Card.Text>
            <Link to={"/ListaIngredienti"}><Button className="mt-3 fs-4" type="button">Indietro</Button></Link>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default CardIngrediente;