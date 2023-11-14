import { Table } from "react-bootstrap";
import { FcCancel } from "react-icons/fc";

const Lavagna = ({ setForm, formOut, setBoolProp, boolProp  }) => {

    const deleteRow = (arg) => {
        let newPopArray = formOut.filter((el)=> el !== arg);
        setForm(newPopArray);
        if(formOut.length === 1){
            setBoolProp(false);
        }
    }
    return (
        <>
        <h1 className="text-light">LAVAGNA</h1>
        {boolProp && <Table striped bordered hover variant='light' className='text-center w-50 my-5'>
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
        </Table>}
        </>
    )
}
export default Lavagna;