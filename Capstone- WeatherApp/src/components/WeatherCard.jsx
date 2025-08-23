function WeatherCard({ time, day, icon, temp, wind }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
      <p className="text-sm">{time || day}</p>
      {icon && <img src={icon} alt="weather" className="w-12 h-12 my-2" />}
      {temp && <p className="text-lg font-bold">{temp}°C</p>}
      {wind && <p className="text-xs">{wind} km/h</p>}
    </div>
  );
}

export default WeatherCard;
