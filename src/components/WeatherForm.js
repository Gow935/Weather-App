import React, { useState } from "react";

const WeatherForm = ({ fetchWeather }) => { 
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(location);
    };

    return (
        <form onSubmit={handleSubmit} className="weather-form"> 
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter the city name"
                required
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
