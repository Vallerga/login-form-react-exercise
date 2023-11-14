import { Button, Form } from "react-bootstrap";

const FormIscrizione = ({setForm, formOut, setBoolProp, boolProp }) => {

    const handleSubmit = (event) => {
        event.preventDefault();        
        let check = (Object.keys(event.target.elements[0].value).length === 0);
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
            
        } else {
            alert("Inserire città")
        }        
    }
    console.log(`formOutput: ${JSON.stringify(formOut)}`)

    return (
        <div className='d-flex flex-column justify-content-center backBox mt-5'>
            <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center text-light py-5">
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nazionalita">
                    <Form.Select aria-label="Default select example">
                        <option>Nazionalità</option>
                        <option value="ITALIA">ITALIA</option>
                        <option value="FRANCIA">FRANCIA</option>
                        <option value="SPAGNA">SPAGNA</option>
                        <option value="GERMANIA">GERMANIA</option>
                    </Form.Select></Form.Group>
                <Button variant="warning" type="submit">
                    Iscrivimi
                </Button>
            </Form>
        </div>
    )
}
export default FormIscrizione;