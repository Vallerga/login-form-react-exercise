import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { arrContext } from "../App";

const PestoGenovese = () => {
    let multipleValContext = useContext(arrContext);
    return (
        <>
            <div className="position-relative d-flex align-items-center justify-content-center">
                <div className="heightSett">
                    <img className="position-absolute imgFullScreen" src={require("../assets/pesto_tabella.webp")} alt="mortaio" />
                </div>
                <div className="d-flex flex-column align-items-center bgHome indexSett pt-4">
                    <h1 className="text-primary mb-3">INGREDIENTI</h1>
                    <Table hover variant="primary" className="indexSett text-primary">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ingrediente</th>
                                <th>prezzo</th>
                                <th>quantità</th>
                            </tr>
                        </thead>
                        <tbody>
                            {multipleValContext[0].map((ingrediente, i) => {
                                return (
                                    <LinkContainer key={i + "ingrediente"} onClick={() => multipleValContext[1](i)} className="w-100" to={"/ingrediente"}>
                                        <tr className="text-center text-primary">
                                            <td>{ingrediente.indice}</td>
                                            <td className="text-start">{ingrediente.ingrediente}</td>
                                            <td>{ingrediente.prezzo}</td>
                                            <td>{ingrediente.quantità}</td>
                                        </tr>
                                    </LinkContainer >
                                )
                            })}
                        </tbody>
                    </Table>
                    <Link className="indexSett" to={"/"}>
                        <Button className="mt-3" type="button">Disconnettiti</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default PestoGenovese;