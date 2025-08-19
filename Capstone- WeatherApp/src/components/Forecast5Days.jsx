import React from "react";
import WeatherCard from "./WeatherCard";

function Forecast5Days() {
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
    <section className="rounded-4xl p-4 shadow-2xl bg-gray-800 w-2/4 ml-40">
      <h2 className="text-lg font-bold text-gray-200">5-Day Forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {days.map((day) => (
          <WeatherCard key={day.date} {...day} />
        ))}
      </div>
    </section>
  );
}

export default Forecast5Days;
