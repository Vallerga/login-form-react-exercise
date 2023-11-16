import { Table } from "react-bootstrap";
import { FcCancel } from "react-icons/fc";

const Lavagna = ({ setForm, formOut, setBoolProp, boolProp }) => {

    const deleteRow = (arg) => {
        let newPopArray = formOut.filter((el) => el !== arg);
        setForm(newPopArray);
        if (formOut.length === 1) {
            setBoolProp(false);
        }
    }
    return (
        <div className="d-flex flex-column align-items-center p-3">
            {boolProp &&
                <><h1 className="text-primary">LAVAGNA</h1>
                    <Table striped bordered hover variant='primary' className='text-center w-50 mt-3'>
                        <thead>
                            <tr style={{ whiteSpace: "nowrap" }}>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Nazionalità</th>
                                <th>cancella</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boolProp && formOut.map((elem, i) => {
                                return (
                                    <tr key={i + " riga"}>
                                        <td>{elem.email}</td>
                                        <td>{elem.password}</td>
                                        <td>{elem.nazionalità}</td>
                                        <td className='fs-3 d-flex justify-content-center' onClick={() => deleteRow(elem)}><span className='d-flex'><FcCancel /></span> </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table></>}
        </div>
    )
}
export default Lavagna;