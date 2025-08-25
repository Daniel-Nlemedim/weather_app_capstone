function WeatherCard({ weatherData }) {
  if (!weatherData || !weatherData.main) return null;

  const temp = Math.round(weatherData.main.temp);
  const wind = weatherData.wind?.speed;
  const iconCode = weatherData.weather?.[0]?.icon;
  const time = new Date(weatherData.dt * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center  text-white shadow">
      {/* Time */}
      <p className="text-sm">{time}</p>

      {/* Icon */}
      {iconCode && (
        <img
          src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt={weatherData.weather?.[0]?.description || "weather"}
          className="w-12 h-12 my-2"
        />
      )}

      {/* Temp */}
      <p className="text-lg font-bold">{temp}°C</p>

      {/* Wind */}
      {wind !== undefined && <p className="text-xs">{wind} km/h</p>}
    </div>
  );
}

export default WeatherCard;
