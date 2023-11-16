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
        <div className="indexSett bgHome d-flex align-items-center justify-content-center pt-5 mt-5">
        <FormIscrizione setForm={setFormOutput} formOut={formOutput} setBoolProp={setBool} boolProp={bool} />
        <Lavagna setForm={setFormOutput} formOut={formOutput} setBoolProp={setBool} boolProp={bool} />
        </div>
      </div>
    </>
  )
}
export default Home;