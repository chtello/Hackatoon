import './App.css'
import Nabvar from './componentes/Nabvar'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [datos, setDatos] = useState(null);
  const [lugar,setLugar] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=9c349c187d3a0e148101022324d4e5f8&units=metric`
        );
        setDatos(response.data);
      } catch (error) {
        console.error('Error al obtener el clima:', error);
      }
    };

    fetchWeather();
  }, [lugar]);

  const busLug = (event) => {
    setLugar(event.target.value)
  }
  return (
    <>
    <div>
      <Nabvar/>
      <input type="text" placeholder='ingrece su ciudad, pueblo, etc...' value={lugar} onChange={busLug}/>
      <button onClick={() => setLugar(lugar)}>buscar</button>
      {datos ? (
        <div>
          <h3>Clima en {datos.name}</h3>
          <p>Temperatura: {datos.main.temp}°C</p>
          <p>Descripción: {datos.weather[0].description}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
    </>
  )
}

export default App


