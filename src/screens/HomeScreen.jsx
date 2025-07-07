import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  const [weather, setWeather] = useState(null);
  const city = "Punjab";

  useEffect(() => {
    fetch(`https://wttr.in/${city}?format=j1`)
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          area: data.nearest_area[0].areaName[0].value,
          region: data.nearest_area[0].region[0].value,
          country: data.nearest_area[0].country[0].value,
          temperature: data.current_condition[0].temp_C,
          description: data.current_condition[0].weatherDesc[0].value,
          humidity: data.current_condition[0].humidity,
          windSpeed: data.current_condition[0].windspeedKmph,
        });
      })
      .catch((err) => console.error("Weather fetch error:", err));
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* Banner Section */}
      <div
        className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center text-white transition-all duration-700"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}>
        <div className="absolute inset-0  bg-opacity-50" />
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg transition duration-500">
            Welcome to Weather App
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            This Appication will show you real time forcast of you location
          </p>
        </div>
      </div>

      {/* Weather Info Section */}
      <div className="max-w-4xl mx-auto mt-12 px-6 md:px-4 transition-all duration-500">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-800 transition duration-500">
          Current Weather in Punjab
        </h2>

        {weather ? (
          <div className="bg-white shadow-xl rounded-xl p-8 text-center transition hover:scale-105 hover:shadow-2xl duration-500">
            <h3 className="text-2xl font-bold text-blue-700">{weather.area}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {weather.region}, {weather.country}
            </p>
            <p className="text-xl capitalize text-gray-700">
              {weather.description}
            </p>
            <p className="text-5xl font-extrabold text-blue-500 mt-2">
              {weather.temperature}°C
            </p>
            <div className="mt-6 flex justify-center gap-10 text-lg text-gray-700">
              <div className="transition hover:scale-110 duration-300">
                💧 Humidity: <strong>{weather.humidity}%</strong>
              </div>
              <div className="transition hover:scale-110 duration-300">
                💨 Wind: <strong>{weather.windSpeed} km/h</strong>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 animate-pulse">
            Loading weather data...
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
