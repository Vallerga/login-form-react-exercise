import { useContext } from "react";
import { Table } from "react-bootstrap";
import { FcCancel } from "react-icons/fc";
import { arrContext } from "../App";

const Lavagna = ({ setForm, formOut, setBoolProp, boolProp }) => {
    let multipleValContext = useContext(arrContext)
    let appProfili = multipleValContext[3]

    const deleteRow = (arg) => {
        let newPopArray = formOut.filter((el) => el !== arg)
        setForm(newPopArray)
        if (formOut.length === 1) {
            setBoolProp(false)
        }
    }

    return (
        <div className="d-flex flex-column align-items-center p-3">
            {false &&
                <><h1 className="text-primary d-none">LAVAGNA</h1>
                    <Table striped bordered hover variant='primary' className='text-center w-50 mt-3 d-none'>
                        <thead>
                            <tr style={{ whiteSpace: "nowrap" }}>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Nazionalità</th>
                                <th>cancella</th>
                            </tr>
                        </thead>
                        <tbody>
                            {false && appProfili.map((elem, i) => {
                                return (
                                    <tr key={i + " riga"}>
                                        <td>{elem.email}</td>
                                        <td>{elem.password}</td>
                                        <td>{elem.nazionalita}</td>
                                        <td className='fs-3 d-flex justify-content-center' onClick={() => deleteRow(elem)}><span className='d-flex align-items-center cancelIcon'><FcCancel /></span> </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table></>}
        </div>
    )
}
export default Lavagna;