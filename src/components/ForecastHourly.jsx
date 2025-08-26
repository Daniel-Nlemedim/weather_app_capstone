import WeatherCard from "./WeatherCard";

function ForecastHourly({ weatherData }) {
  if (!weatherData || !weatherData.list) return null;

  return (
    <div className="shadow-slate-500 hover:shadow-2xs transition rounded-2xl p-5 bg-gray-800 ml-45  ">
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Hourly Forecast</h2>

      <div className="flex gap-4 overflow-x-auto pb-2 ">
        {weatherData.list.slice(0, 8).map((data, index) => (
          <WeatherCard key={index} weatherData={data} />
        ))}
      </div>
    </div>
  );
}
export default ForecastHourly;
