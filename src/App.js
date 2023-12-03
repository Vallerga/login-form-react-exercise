import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PestoGenovese from './components/PestoGenovese';
import { createContext, useEffect, useState } from 'react';
import CardIngrediente from './components/CardIngrediente';
import Accedi from './components/Accedi';


export const arrContext = createContext();

function App() {
  const [indiceDinamico, setIndiceDinamico] = useState(0)
  // const [iscritti, setIscritti] = useState([])
  const [ingredienti, setIngredienti] = useState([])
  const [profili, setProfili] = useState([])

  // Chiamata AJAX per scaricare dal DB i dati relativi alla ricetta pesto
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/sapori_liguri_be/antonio/menu/pestoligure/listapesto");
        const resJSON = await response.json();
        setIngredienti(resJSON);
      }        
      fetchData()
    }, [])

    // Chiamata AJAX per scaricare l'elenco degli utenti iscritti al servizio
    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("http://localhost:8080/sapori_liguri_be/antonio/home/login/listaprofili");
          const resJSON = await response.json();
          setProfili(resJSON);
          // console.log(`profili: ${resJSON}`)
        }
        fetchData()
      }, [])
    
  const handleClick = (arg) => {
    setIndiceDinamico(arg);
  }

  return (
    <arrContext.Provider value={[ingredienti, handleClick, indiceDinamico, profili, setProfili]}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Accedi />} />
                <Route path="/registrazione" element={<Home />} />
                <Route path="/pestogenovese" element={<PestoGenovese />} />
                <Route path="/ingrediente" element={<CardIngrediente />} />
              </Routes>
            </BrowserRouter>
    </arrContext.Provider>
  );
}

export default App;
