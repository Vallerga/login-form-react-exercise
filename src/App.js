import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PestoGenovese from './components/PestoGenovese';
import { createContext, useState } from 'react';
import databaseBasilico from "./assets/datapesto.json";
import CardIngrediente from './components/CardIngrediente';

export const dbBasilicoContext = createContext();
export const indiceFunction = createContext();
export const indice = createContext();
export const arrContext = createContext();

function App() {
  const [indiceDinamico, setIndiceDinamico] = useState(0)
  const handleClick = (arg) => {
    setIndiceDinamico(arg);
  }
  return (
    <arrContext.Provider value={[databaseBasilico, handleClick, indiceDinamico]}>      
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pestogenovese" element={<PestoGenovese />} />
                <Route path="/ingrediente" element={<CardIngrediente />} />
              </Routes>
            </BrowserRouter>
    </arrContext.Provider>
  );
}

export default App;
