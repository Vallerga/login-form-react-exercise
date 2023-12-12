import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { arrContext } from "../App";

function ModaleIngredienti(props) {
    const [aggiuntaDB, setAggiuntaDB] = useState(null)
    let multipleValContext = useContext(arrContext)
    let appIngredienti = multipleValContext[0]
    let appSetModificaDB = multipleValContext[5]

    const postaIngrediente = (event) => {
        event.preventDefault();

        let nuovoIndice = appIngredienti.length + 1
        let formIngrediente = event.target.elements[0].value
        let formPrezzo = event.target.elements[1].value
        let formQuantita = event.target.elements[2].value
        let formDescrizione = event.target.elements[3].value

        let check = (Object.keys(formIngrediente).length === 0) || (Object.keys(formPrezzo).length === 0)
            || (Object.keys(formQuantita).length === 0) || (Object.keys(formDescrizione).length === 0)
        if (!check) {

            let IngredienteDaPostare = {
                indice: nuovoIndice,
                ingrediente: formIngrediente,
                prezzo: formPrezzo,
                quantita: formQuantita,
                descrizione: formDescrizione,
                imgUrl: "https://www.my-personaltrainer.it/images/ricette/606/pesto-di-rucola.jpg"
            };
            postIngrediente(IngredienteDaPostare)
            let contatore = + 1
            appSetModificaDB(contatore)
            event.target.reset()
        } else {
            alert("compilare tutti i campi")
        }
    }

    const postIngrediente = async (nuovoIngrediente) => {
        const response = await fetch("http://localhost:8080/saporiliguri/antonio/menu/pestoligure/", {
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
        appSetModificaDB(aggiuntaDB)
    }, [aggiuntaDB, appSetModificaDB])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="aggiungiIngrediente"
            centered
        >            
            <Modal.Body>
                <Form onSubmit={postaIngrediente} className="d-flex flex-column align-items-start text-primary px-5 fs-3">
                    <Form.Group className="mb-4" controlId="Ingrediente">
                        <Form.Label>INGREDIENTE</Form.Label>
                        <Form.Control className="fs-4" type="text" placeholder="nome" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="prezzo">
                        <Form.Label>PREZZO</Form.Label>
                        <Form.Control className="fs-4" type="text" placeholder="Prezzo al kg" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="quantità">
                        <Form.Label>QUANTITA'</Form.Label>
                        <Form.Control className="fs-4" type="text" placeholder="quantità" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="descrizione">
                        <Form.Label>AGGIUNGI UNA BREVE DESCRIZIONE</Form.Label>
                        <Form.Control className="fs-4" type="text" placeholder="descrizione" />
                    </Form.Group>
                    <div className="d-flex justify-content-between my-3 w-100">
                    <Button className="fs-4" variant="primary" type="submit">
                        Finalizza
                    </Button>
                    <Button className="fs-4" onClick={props.onHide}>Esci</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModaleIngredienti;