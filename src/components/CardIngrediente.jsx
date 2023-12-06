import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { arrContext } from "../App";

const CardIngrediente = () => {
  let multipleValContext = useContext(arrContext);
  const [delSensor, setDelSensor] = useState(false)

  const deleteIngrediente = async () => {
    let indice = "http://localhost:8080/sapori_liguri_be/antonio/menu/pestoligure2/page?indice=" + String.toString(multipleValContext[0][multipleValContext[2]].indice)
    const response = await fetch(indice, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(indice),
    });
    const resJSON = await response.ok;
    if (resJSON) {
      const fetchData = async () => {
        const response = await fetch("http://localhost:8080/sapori_liguri_be/antonio/home/login/listaprofili");
        const resJSON = await response.json();
        multipleValContext[4](resJSON);
        setDelSensor(!delSensor);
      }
      fetchData()
    }
  }

  if(delSensor){
    <Navigate to="ListaIngredienti"/>
  }

  return (
    <>
      <div className="position-relative d-flex align-items-center justify-content-center heightSett pt-5 text-dark">
        <img className="position-absolute imgFullScreen" src={multipleValContext[0][multipleValContext[2]].imgUrl} alt="pesto" />
        <Card className="w-25 text-center indexSett">
          <Card.Header className="fs-1 text-uppercase text-dark">{multipleValContext[0][multipleValContext[2]].ingrediente}</Card.Header>
          <Card.Body>
            <Card.Title className="fs-3 fw-bold text-primary">{multipleValContext[0][multipleValContext[2]].quantita} - {multipleValContext[0][multipleValContext[2]].prezzo}</Card.Title>
            <Card.Text className="justifyCSS fs-4">
              {multipleValContext[0][multipleValContext[2]].descrizione}
            </Card.Text>
            <Link to={"/ListaIngredienti"}><Button className="m-3 fs-4" type="button">Indietro</Button></Link>
            <Button className="m-3 fs-4" type="button" onClick={() => deleteIngrediente()}>cancella</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default CardIngrediente;