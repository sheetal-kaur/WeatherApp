import React, { useState } from "react";

const ServicesScreen = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setWeather(null);

    try {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await response.json();

      setWeather({
        area: data.nearest_area[0].areaName[0].value,
        region: data.nearest_area[0].region[0].value,
        country: data.nearest_area[0].country[0].value,
        temperature: data.current_condition[0].temp_C,
        description: data.current_condition[0].weatherDesc[0].value,
        humidity: data.current_condition[0].humidity,
        windSpeed: data.current_condition[0].windspeedKmph,
      });
    } catch (err) {
      console.error("Error fetching weather:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Weather Search
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Use the search bar below to get real-time weather information for any
          city.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Search
          </button>
        </div>

        {/* Weather Display */}
        {loading && (
          <p className="text-gray-500 animate-pulse">Loading weather data...</p>
        )}

        {weather && (
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-xl mx-auto transition hover:shadow-2xl hover:scale-105 duration-500">
            <h2 className="text-2xl font-semibold text-blue-700 mb-1">
              {weather.area}
            </h2>
            <p className="text-gray-500 mb-3">
              {weather.region}, {weather.country}
            </p>
            <p className="text-xl capitalize text-gray-700 mb-1">
              {weather.description}
            </p>
            <p className="text-5xl font-extrabold text-blue-500">
              {weather.temperature}°C
            </p>
            <div className="flex justify-center gap-8 mt-4 text-gray-700 text-lg">
              <p>
                💧 Humidity: <strong>{weather.humidity}%</strong>
              </p>
              <p>
                💨 Wind: <strong>{weather.windSpeed} km/h</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesScreen;
