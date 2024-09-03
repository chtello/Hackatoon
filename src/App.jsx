import './App.css'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const cityToSearch = "Cordoba";
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=9c349c187d3a0e148101022324d4e5f8&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error al obtener el clima:', error);
      }
    };

    fetchWeather();
  }, [cityToSearch]);

  return (
    <>
    <div>
      {weatherData ? (
        <div>
          <h3>Clima en {weatherData.name}</h3>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Descripción: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
    </>
  )
}

export default App


