import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormIscrizione from './components/FormIscrizione';
import Lavagna from './components/Lavagna';
import { useState } from 'react';

function App() {
  const[formOutput, setFormOutput] = useState([]);
  const[bool, setBool] = useState(false);


  return (
    <div className='app bg-danger d-flex flex-column align-items-center'>
      <FormIscrizione setForm={setFormOutput} formOut={formOutput} setBoolProp={setBool} boolProp={bool}/>
      <Lavagna setForm={setFormOutput} formOut={formOutput} setBoolProp={setBool} boolProp={bool}/>
    </div>
  );
}

export default App;
