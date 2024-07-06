import { useState } from "react";
import "./style.css"

export const ViewWeather: React.FC = () => {

const [city, setCity] = useState("")

  return (
    <main>
      <div className="container">
        <div className="form">
          <h2>Consulta Climática</h2>
          <input type="text" placeholder="Digite o nome da cidade" onChange={(event)=>{
            setCity(event.target.value)
          }}/>
          <button>Consultar</button>
        </div>
        <div className="result">
          <h1>{city}</h1>
        </div>
      </div>
    </main>
  );
};
