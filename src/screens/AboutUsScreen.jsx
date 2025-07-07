import React from "react";

const teamMembers = [
  {
    name: "Sheetal Kaur",
    rollNumber: "2224939",
    className: "BCA",
    branch: "Information Technology",
    photo:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Jaspreet Kaur",
    className: "BCA",
    rollNumber: "2224902",
    branch: "Information Technology",

    photo:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Muskan",
    className: "BCA",
    branch: "Information Technology",
    rollNumber: "2224913",
    photo:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
];

const AboutUsScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
      {/* Project Brief Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          About Our Weather App
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Weather App is a student project aimed at providing real-time
          weather updates without the need for API keys, making weather
          information accessible and simple. Built using React, Vite, and
          Tailwind CSS, the app fetches data from a free public API and presents
          it with an interactive and user-friendly interface. Our goal is to
          help users get accurate weather details quickly and easily.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl duration-300">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-400"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Roll No:</strong> {member.rollNumber}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Class:</strong> {member.className}
              </p>
              <p className="text-gray-600">
                <strong>Branch:</strong> {member.branch}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
