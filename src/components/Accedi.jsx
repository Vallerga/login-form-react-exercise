import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { arrContext } from "../App";

const Accedi = () => {
    const [profile, setProfile] = useState(null);
    let multipleValContext = useContext(arrContext);

    const handleSubmit2 = (event) => {
        event.preventDefault();
        if (multipleValContext)
            if (multipleValContext[3][0].email.includes(event.target.elements[0].value) && multipleValContext[3][0].password.includes(event.target.elements[1].value))
                setProfile(true);
    }

    if (profile !== null) {
        return <Navigate to="/pestogenovese" />
    }

    return (
        <div className="d-flex heightSett align-items-center justify-content-center">
            <div className="heightSett">
                <img className="position-absolute imgFullScreen" src={require("../assets/login_foto.webp")} alt="mortaio" />
            </div>
            <Form onSubmit={handleSubmit2} className="d-flex flex-column align-items-center text-primary bgHome indexSett px-5">
                <h1 className="text-primary mb-3">SAPORI LIGURI</h1>
                <Form.Group controlId="email2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="password2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <Button variant="primary" type="submit">
                        Accedi
                    </Button>
                    <Link to={"/registrazione"}><Button type="button">Iscriviti</Button></Link>
                </div>
            </Form>
        </div>
    )
}
export default Accedi;