import { useState } from "react";
import FormIscrizione from "./FormIscrizione";
import Lavagna from "./Lavagna";

const Home = () => {
  const [formOutput, setFormOutput] = useState([]);
  const [bool, setBool] = useState(false);
  return (
    <>
      <div className="indexSett position-relative d-flex align-items-center justify-content-center">
        <div className="heightSett">
          <img className="position-absolute loginBG" src={require("../assets/mortaio.jpg")} alt="mortaio" />
        </div>
        <div className="indexSett bgHome">
          <h1 className="text-center text-primary pb-3">CUCINA GENOVESE DOP</h1>
          <div className="d-flex align-items-center justify-content-center">
            <FormIscrizione setForm={setFormOutput} formOut={formOutput} setBoolProp={setBool} boolProp={bool} />
            <Lavagna setForm={setFormOutput} formOut={formOutput} setBoolProp={setBool} boolProp={bool} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;