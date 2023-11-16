import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dbBasilicoContext } from "../App";
import { indiceFunction } from "../App";
import { LinkContainer } from "react-router-bootstrap";

const PestoGenovese = () => {
    let dbBasilico = useContext(dbBasilicoContext);
    let handleClickCont = useContext(indiceFunction);
    return (
        <>
            <div className="d-flex flex-column align-items-center mt-5">
                <Table striped bordered hover variant="success" className="w-25">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ingrediente</th>
                            <th>prezzo</th>
                            <th>quantità</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbBasilico.map((ingrediente, i) => {
                            return (
                                <LinkContainer onClick={() => handleClickCont(i)} className="w-100" style={{textDecoration: 'none', color: 'black'}} to={"/ingrediente"}>
                                    <tr className="text-center" key={i + "ingrediente"}>
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
                <Link to={"/"}>
                    <Button className="my-4" type="button">Disconnettiti</Button>
                </Link>
            </div>
        </>
    )
}
export default PestoGenovese;