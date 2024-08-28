import React, { useState } from "react";
import axios from "axios";
import './App.css';
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import Loading from "./components/Loading";
import Error from "./components/Error";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (location) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=20c6f2169eee6bf6b4d694a4f6175024&units=metric`);
      setWeather(response.data);
    } catch (err) {
      setError('Unable to fetch the weather data. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <WeatherForm fetchWeather={fetchWeather} />
      {weather && <WeatherDisplay weather={weather} />}
      {loading && <Loading />}
      {error && <Error message={error} />}
    </div>
  );
}

export default App;



