import React from "react";
import WeatherCard from "./WeatherCard";

function Forecast5Days() {
  const CurrentDate = new Date();
  const displayDate = CurrentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const days = [
    {
      date: "2023-10-01",
      temperature: 22,
      icon: "/icons/sun.png",
      condition: "Sunny",
    },
    {
      date: "2023-10-02",
      temperature: 20,
      icon: "/icons/cloudy.png",
      condition: "Cloudy",
    },
    {
      date: "2023-10-03",
      temperature: 18,
      icon: "/icons/rain.png",
      condition: "Rainy",
    },
    {
      date: "2023-10-04",
      temperature: 21,
      icon: "/icons/sun.png",
      condition: "Sunny",
    },
    {
      date: "2023-10-05",
      temperature: 19,
      icon: "/icons/cloudy.png",
      condition: "Cloudy",
    },
  ];
  return (
    <section className="rounded-4xl p-4 shadow-slate-500 hover:shadow-2xs transition bg-gray-800 w-2/4 ml-45">
      <h2 className="text-2xl font-extrabold text-gray-200 items-center">
        5-Day Forecast
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-4 font-extrabold ">
        {days.map((day) => (
          <div key={day.date} className="flex items-center mb-2">
            <img src={day.icon} alt={day.condition} className="w-8 h-8 mr-2" />
            <div>
              <p className="text-sm font-bold text-gray-400">{displayDate}</p>
              <p className="text-sm text-gray-400">{day.temperature}°C</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forecast5Days;
