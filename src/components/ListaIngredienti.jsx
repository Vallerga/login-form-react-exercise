import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useContext, useState } from "react";
import { arrContext } from "../App";
import AggiungiIngrediente from "./AggiungiIngrediente";

const ListaIngredienti = () => {
    let multipleValContext = useContext(arrContext)
    const [modalShow, setModalShow] = useState(false)
    let appSetIndiceCard = multipleValContext[1]
    let appIngredienti = multipleValContext[0]

    return (
        <>
            <div className="position-relative d-flex align-items-center justify-content-center">
                <div className="heightSett">
                    <img className="position-absolute imgFullScreen" src={require("../assets/pesto_tabella.webp")} alt="mortaio" />
                </div>
                <div className="d-flex flex-column align-items-center bgHome indexSett pt-4">
                    <h1 className="text-dark mb-3 fs-1">INGREDIENTI</h1>
                    <Table hover striped bordered variant="light" className="indexSett fs-4 text-primary">
                        <thead>
                            <tr className="fw-bold">
                                <th>#</th>
                                <th>ingrediente</th>
                                <th>prezzo</th>
                                <th>quantità</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appIngredienti.map((ingrediente, i) => {
                                return (
                                    <LinkContainer key={i + "ingrediente"} onClick={() => appSetIndiceCard(i)} className="w-100" to={"/ingrediente"}>
                                        <tr className="text-center text-dark fs-4">
                                            <td>{ingrediente.indice}</td>
                                            <td className="text-start">{ingrediente.ingrediente}</td>
                                            <td>{ingrediente.prezzo}</td>
                                            <td>{ingrediente.quantita}</td>
                                        </tr>
                                    </LinkContainer>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Button className="fs-4 my-3" variant="primary" onClick={() => setModalShow(true)}>
                        Vuoi personalizzare la ricetta?
                    </Button>
                    <AggiungiIngrediente
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <Link className="indexSett" to={"/"}>
                        <Button className="mt-3 fs-4" type="button">Disconnettiti</Button>
                    </Link>
                </div>
            </div >
        </>
    )
}
export default ListaIngredienti;