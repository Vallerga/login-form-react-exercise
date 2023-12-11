import { useContext, } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { arrContext } from "../App";

const CardIngrediente = () => {
  const navigate = useNavigate()
  let multipleValContext = useContext(arrContext)
  let appIngredienti = multipleValContext[0]
  let appSetIngredienti = multipleValContext[6]
  let appIndiceCard = multipleValContext[2]

  const deleteIngrediente = async () => {
    let indice = parseInt(appIngredienti[appIndiceCard].indice)
    const response = await fetch(`http://localhost:8080/saporiliguri/antonio/menu/pestoligure2/page?indice=${indice}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(indice),
    });

    const resJSON = await response.ok;
    if (resJSON) {
      const fetchData = async () => {
        const response = await fetch("http://localhost:8080/saporiliguri/antonio/menu/pestoligure/listapesto")
        const resJSON = await response.json()
        appSetIngredienti(resJSON);
        navigate("/listaingredienti")
      }
      fetchData()
    }
  }

  return (
    <>
      <div className="position-relative d-flex align-items-center justify-content-center heightSett pt-5 text-dark">
        <img className="position-absolute imgFullScreen" src={appIngredienti[appIndiceCard].imgUrl} alt="pesto" />
        <Card className="w-25 text-center indexSett">
          <Card.Header className="fs-1 text-uppercase text-dark">{appIngredienti[appIndiceCard].ingrediente}</Card.Header>
          <Card.Body>
            <Card.Title className="fs-3 fw-bold text-primary">{appIngredienti[appIndiceCard].quantita} - {appIngredienti[appIndiceCard].prezzo}</Card.Title>
            <Card.Text className="justifyCSS fs-4">
              {appIngredienti[appIndiceCard].descrizione}
            </Card.Text>
            <Link to={"/listaingredienti"}><Button className="m-3 fs-4" type="button">Indietro</Button></Link>
            <Button className="m-3 fs-4" type="button" onClick={() => deleteIngrediente()}>cancella</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default CardIngrediente;