import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const OurProcessScreen = () => {
  const steps = [
    {
      icon: <LocationOnIcon className="text-blue-600 text-6xl mb-4" />,
      title: "Step 1: Choose a Location",
      description:
        "The app starts by using a default location (Punjab). Users can also search for other cities to get weather updates.",
    },
    {
      icon: <WbSunnyIcon className="text-yellow-500 text-6xl mb-4" />,
      title: "Step 2: Fetch Weather Data",
      description:
        "The app uses a free and public weather API (wttr.in) to fetch current weather data like temperature, humidity, and wind speed.",
    },
    {
      icon: <StorageIcon className="text-purple-600 text-6xl mb-4" />,
      title: "Step 3: Process the Data",
      description:
        "The API responds with weather data in JSON format. React processes this data and prepares it for display on screen.",
    },
    {
      icon: <PhoneIphoneIcon className="text-green-600 text-6xl mb-4" />,
      title: "Step 4: Display on UI",
      description:
        "Tailwind CSS is used to present the weather data in an interactive, animated, and mobile-responsive layout for a better user experience.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
          How Our Weather App Works
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          This is a simple student project that showcases how real-time weather
          data can be integrated using modern web technologies like React,
          Tailwind CSS, and free APIs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 text-center">
            <div className="flex justify-center">{step.icon}</div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              {step.title}
            </h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcessScreen;
