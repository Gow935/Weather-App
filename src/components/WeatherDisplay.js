import React from "react";

const WeatherDisplay = ({ weather }) => {
    return (
        <div className="weather-display">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherDisplay;