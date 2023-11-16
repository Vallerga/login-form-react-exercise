import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { arrContext,} from "../App";

const CardIngrediente = () => {  
  let multipleValContext = useContext(arrContext);

  return (
    <>
      <div className="position-relative d-flex align-items-center justify-content-center heightSett pt-5">
        <img className="position-absolute imgFullScreen" src={require("../assets/pesto.jpg")} alt="pesto" />
        <Card className="w-25 text-center indexSett">
          <Card.Header>{multipleValContext[0][multipleValContext[2]].ingrediente}</Card.Header>
          <Card.Body>
            <Card.Title>{multipleValContext[0][multipleValContext[2]].quantità} - {multipleValContext[0][multipleValContext[2]].prezzo}</Card.Title>
            <Card.Text className="justifyCSS">
              {multipleValContext[0][multipleValContext[2]].descrizione}
            </Card.Text>
            <Link to={"/PestoGenovese"}><Button className="mt-3" type="button">Indietro</Button></Link>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default CardIngrediente;