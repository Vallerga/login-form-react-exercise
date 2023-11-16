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

function App() {
  const [indiceDinamico, setIndiceDinamico] = useState(0)
  const handleClick = (arg) => {
    setIndiceDinamico(arg);
  }
  return (
    <indice.Provider value={indiceDinamico}>
      <indiceFunction.Provider value={handleClick}>
        <dbBasilicoContext.Provider value={databaseBasilico}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pestogenovese" element={<PestoGenovese />} />
              <Route path="/ingrediente" element={<CardIngrediente />} />
            </Routes>
          </BrowserRouter>
        </dbBasilicoContext.Provider>
      </indiceFunction.Provider>
    </indice.Provider>
  );
}

export default App;
