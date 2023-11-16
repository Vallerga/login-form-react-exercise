import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormIscrizione = ({setForm, formOut, setBoolProp, boolProp }) => {

    const handleSubmit = (event) => {
        event.preventDefault();        
        let check = (Object.keys(event.target.elements[0].value).length === 0)||(Object.keys(event.target.elements[1].value).length === 0)||(event.target.elements[2].value === "Nazionalità");
        if (!check) {
            let buffer = {
                email: event.target.elements[0].value,
                password: event.target.elements[1].value,
                nazionalità: event.target.elements[2].value
            };
            let newArr = formOut.map((el) => el);
            newArr.push(buffer);
            setForm(newArr)
            setBoolProp(true);
            event.target.reset();
            
        } else {
            alert("compilare tutti i campi")
        }        
    }

    return (
            <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-start text-primary px-5">
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="nazionalita">
                    <Form.Select aria-label="Default select example">
                        <option>Nazionalità</option>
                        <option value="ITALIA">ITALIA</option>
                        <option value="FRANCIA">FRANCIA</option>
                        <option value="SPAGNA">SPAGNA</option>
                        <option value="GERMANIA">GERMANIA</option>
                    </Form.Select></Form.Group>
                <Button variant="primary" type="submit">
                    Iscrivimi
                </Button>
                <Link to={"/pestogenovese"}><Button className="mt-3" type="button">Accedi</Button></Link>
            </Form>
    )
}
export default FormIscrizione;