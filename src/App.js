import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListaIngredienti from './components/ListaIngredienti';
import { createContext, useEffect, useState } from 'react';
import CardIngrediente from './components/CardIngrediente';
import Accedi from './components/Accedi';


export const arrContext = createContext();

function App() {
  const [indiceDinamico, setIndiceDinamico] = useState(0)
  const [ingredienti, setIngredienti] = useState([])
  const [profili, setProfili] = useState([])
  const [modificaDB, setModificaDB] = useState(0)

  // Chiamata AJAX per scaricare dal DB i dati relativi alla ricetta pesto
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/sapori_liguri_be/antonio/menu/pestoligure/listapesto");
        const resJSON = await response.json();
        setIngredienti(resJSON);
      }        
      fetchData()
    }, [modificaDB])

    // Chiamata AJAX per scaricare l'elenco degli utenti iscritti al servizio
    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("http://localhost:8080/sapori_liguri_be/antonio/home/login/listaprofili");
          const resJSON = await response.json();
          setProfili(resJSON);
        }
        fetchData()
      }, [])
    
  const handleClick = (arg) => {
    setIndiceDinamico(arg);
  }
  
  return (
    <arrContext.Provider value={[ingredienti, handleClick, indiceDinamico, profili, setProfili, modificaDB, setModificaDB]}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Accedi />} />
                <Route path="/registrazione" element={<Home />} />
                <Route path="/ListaIngredienti" element={<ListaIngredienti />} />
                <Route path="/ingrediente" element={<CardIngrediente />} />
              </Routes>
            </BrowserRouter>
    </arrContext.Provider>
  );
}

export default App;
