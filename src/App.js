import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from 'react';

function App(props) {
  const [selectedColor, setselectedColor] = useState("rojo");

  return (
    <>

      <div className="sitck"></div>
        <div className="semaforo">
          <div onClick={() => setselectedColor("rojo")} className={"luz rojo" + (selectedColor === "rojo" ? " brillo" : "")} ></div>
          <div onClick={() => setselectedColor("amarillo")} className={"luz amarillo" + (selectedColor === "amarillo" ? " brillo" : "")}></div>
          <div onClick={() => setselectedColor("verde")} className={"luz verde" + (selectedColor === "verde" ? " brillo" : "")}></div>

        </div>
      
    </>

  );
}

export default App;
