import React from "react";
import WeatherCard from "./WeatherCard";

function ForecastHourly() {
  const time = new Date();
  const hourlyData = [];
  for (let i = 0; i < 5; i++) {
    const displayTime = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    hourlyData.push({
      time: displayTime,
      temp: 22 + i,
      icon: "/icons/sun.png",
      wind: 10 + i * 2,
      condition: "Sunny",
    });
    time.setHours(time.getHours() + 1);
  }
  return (
    <div className="shadow-lg rounded-4xl p-5 bg-gray-800 ">
      <h2 className="text-lg font-bold text-gray-200">Hourly Forecast</h2>
      <div className="grid grid-cols-5 gap-4 mt-4 p-4 justify-center text-gray-400">
        {hourlyData.map((hour) => (
          <WeatherCard
            key={hour.time}
            time={hour.time}
            icon={hour.icon}
            temp={`${hour.temp}`}
            wind={`${hour.wind} `}
          />
        ))}
      </div>
    </div>
  );
}

export default ForecastHourly;
