import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { arrContext } from "../App";

const Accedi = () => {
    const [profile, setProfile] = useState(null)
    let multipleValContext = useContext(arrContext)
    let appProfili = multipleValContext[3]

    const handleLogin = (event) => {
        event.preventDefault()
        if (appProfili) {
            let myUser = appProfili.filter((user) => user.email.includes(event.target.elements[0].value))
            if (myUser[0].password === event.target.elements[1].value)
                setProfile(true)
        } else {
            alert("EmailPassword")
        }
    }

    if (profile !== null) {
        return <Navigate to="/listaingredienti" />
    }

    return (
        <div className="d-flex heightSett align-items-center justify-content-center">
            <div className="heightSett">
                <img className="position-absolute imgFullScreen" src={require("../assets/login_foto.webp")} alt="mortaio" />
            </div>
            <Form onSubmit={handleLogin} className="d-flex flex-column align-items-center text-primary bgHome indexSett px-5">
                <h1 className="text-primary mb-3">SAPORI LIGURI</h1>
                <Form.Group className="fs-4" controlId="email2">
                    <Form.Label>Indirizzo Email</Form.Label>
                    <Form.Control className="fs-4" type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="fs-4 mb-4" controlId="password2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="fs-4" type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <Button className="fs-4" variant="primary" type="submit">
                        Accedi
                    </Button>
                    <Link to={"/registrazione"}><Button className="fs-4" type="button">Iscriviti</Button></Link>
                </div>
            </Form>
        </div>
    )
}
export default Accedi;