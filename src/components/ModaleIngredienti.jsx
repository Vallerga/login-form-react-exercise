import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { arrContext } from "../App";

function ModaleIngredienti(props) {
    const [aggiuntaDB, setAggiuntaDB] = useState(null)
    let multipleValContext = useContext(arrContext);
    const postaIngrediente = (event) => {
        event.preventDefault();
        let check = (Object.keys(event.target.elements[0].value).length === 0)
            || (Object.keys(event.target.elements[1].value).length === 0)
            || (Object.keys(event.target.elements[2].value).length === 0)
            || (Object.keys(event.target.elements[3].value).length === 0);
        if (!check) {
            let nuovoIndice = multipleValContext[0].length + 1
            let buffer = {
                indice: nuovoIndice,
                ingrediente: event.target.elements[0].value,
                prezzo: event.target.elements[1].value,
                quantita: event.target.elements[2].value,
                descrizione: event.target.elements[3].value,
                imgUrl: "https://www.my-personaltrainer.it/images/ricette/606/pesto-di-rucola.jpg"
            };
            postIngrediente(buffer)
            let contatore =+ 1
            multipleValContext[6](contatore)
            event.target.reset()
        } else {
            alert("compilare tutti i campi")
        }
    }

    const postIngrediente = async (nuovoIngrediente) => {
        const response = await fetch("http://localhost:8080/sapori_liguri_be/antonio/menu/pestoligure/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuovoIngrediente),
        });
        const resJSON = await response.json()
        setAggiuntaDB(resJSON)
    }

    useEffect(() => {
        multipleValContext[6](aggiuntaDB)
    },[aggiuntaDB, multipleValContext])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="aggiungiIngrediente"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="aggiungiIngrediente">
                    Personalizza la ricetta!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={postaIngrediente} className="d-flex flex-column align-items-start text-primary px-5 fs-3">
                    <Form.Group className="mb-4" controlId="Ingrediente">
                        <Form.Label>Ingrediente</Form.Label>
                        <Form.Control className="fs-4" type="text" placeholder="Digita il nome" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="prezzo">
                        <Form.Label>prezzo</Form.Label>
                        <Form.Control className="fs-4" type="text" placeholder="Digita prezzo al kg" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="quantità">
                        <Form.Label>quantita</Form.Label>
                        <Form.Control className="fs-4" type="text" placeholder="Digita la quantità" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="descrizione">
                        <Form.Label>Aggiungi una breve descrizione</Form.Label>
                        <Form.Control className="fs-4" type="text" placeholder="Digita la descrizione" />
                    </Form.Group>
                    <Button className="fs-4" variant="primary" type="submit">
                        Finalizza
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="fs-4" onClick={props.onHide}>Esci</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModaleIngredienti;