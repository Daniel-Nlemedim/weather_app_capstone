import { Navigation2 } from "lucide-react";

function Forecast5Days({ weatherData }) {
  if (!weatherData || !weatherData.list) {
    return <div>No forecast data available</div>;
  }

  // Group forecast by day and pick one (noon) entry
  const dailyForecast = [];
  const usedDates = new Set();

  weatherData.list.forEach((entry) => {
    const date = new Date(entry.dt_txt);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });

    // Only pick one entry per day (prefer around 12:00)
    if (
      !usedDates.has(day) &&
      date.getHours() === 12 // pick midday forecast
    ) {
      dailyForecast.push(entry);
      usedDates.add(day);
    }
  });

  //  only 5 days
  const forecast5 = dailyForecast.slice(0, 5);

  return (
    <section className="rounded-4xl p-6 shadow-slate-500 hover:shadow-2xs transition bg-gray-100 dark:bg-gray-800 ml-45  ">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4 ">
        {forecast5.map((day, index) => {
          const date = new Date(day.dt_txt);
          const weekday = date.toLocaleDateString("en-US", {
            weekday: "short",
          });
          const temp = Math.round(day.main.temp);
          const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
          const condition = day.weather[0].main;
          const wind = day.wind?.speed;

          return (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-5 flex flex-col items-center  text-white shadow duration-200 hover:scale-105 transition-transform "
            >
              <p className="font-semibold text-gray-700 dark:text-gray-200">
                {weekday}
              </p>
              <img src={icon} alt={condition} className="w-12 h-12" />
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {temp}°C
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">
                {condition}
              </p>
              <Navigation2 size={35} className="text-blue-950" />
              <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">
                {wind} km/h
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Forecast5Days;
