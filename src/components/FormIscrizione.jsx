import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { arrContext } from "../App";

const FormIscrizione = ({ setForm, formOut, setBoolProp, boolProp }) => {
    let multipleValContext = useContext(arrContext)
    let appSetProfili = multipleValContext[4]

    const handleSubmit = (event) => {
        event.preventDefault()
        let check = (Object.keys(event.target.elements[0].value).length === 0) ||
            (Object.keys(event.target.elements[1].value).length === 0) ||
            (event.target.elements[2].value === "Nazionalità")
        if (!check) {
            let buffer = {
                email: event.target.elements[0].value,
                password: event.target.elements[1].value,
                nazionalita: event.target.elements[2].value
            };
            let newArr = formOut.map((el) => el)
            newArr.push(buffer)
            setForm(newArr)
            appSetProfili(newArr)
            // post nel db il profilo
            postProfilo(buffer, newArr)
            setBoolProp(true)
            event.target.reset()

        } else {
            alert("compilare tutti i campi")
        }
    }

    const postProfilo = async (nuovoProfile, oldArrayProfili) => {
        const response = await fetch("http://localhost:8080/saporiliguri/antonio/home/iscriviti", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuovoProfile),
        });

        const resJSON = await response.json()
        oldArrayProfili.push(resJSON)
        appSetProfili(oldArrayProfili)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-start text-primary px-5 fs-3">
                <Form.Group controlId="email">
                    <Form.Label>Indirizzo Email</Form.Label>
                    <Form.Control className="fs-4" type="email" placeholder="Inserisci email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="fs-4" type="password" placeholder="Inserisci password" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="nazionalita">
                    <Form.Select className="fs-4" aria-label="Default select example">
                        <option>Nazionalità</option>
                        <option value="ITALIA">ITALIA</option>
                        <option value="FRANCIA">FRANCIA</option>
                        <option value="SPAGNA">SPAGNA</option>
                        <option value="GERMANIA">GERMANIA</option>
                    </Form.Select></Form.Group>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <Button className="fs-4" variant="primary" type="submit">
                        Iscrivimi
                    </Button>
                    <Link to={"/"}><Button className="fs-4" type="button">Login</Button></Link>
                </div>
            </Form>
        </div>
    )
}
export default FormIscrizione;