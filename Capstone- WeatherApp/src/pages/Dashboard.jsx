import Header from "../components/header";
import CurrentWeather from "../components/CurrentWeather";
import Forecast5Days from "../components/Forecast5Days";
import ForecastHourly from "../components/ForecastHourly";
import { useState } from "react";
import useSWR from "swr"; // for data fetching

function Dashboard() {
  const [query, setQuery] = useState("Lagos");
  // const [city, setCity] = useState("Lagos");
  const apiKey = "700c116fb84bb53fdeec9c74479db76f"; // your API key
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: current, error: errCurrent } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      query
    )}&appid=${apiKey}&units=metric`,
    fetcher
  );

  //3-hours forecast
  const { data: forecast, error: errForecast } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
      query
    )}&appid=${apiKey}&units=metric`,
    fetcher
  );

  if (errCurrent || errForecast) return <div>Error loading data</div>;
  if (!current || !forecast) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6">
      <Header setQuery={setQuery} apiKey={apiKey} />
      <CurrentWeather weatherData={current} />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 mr-7">
        <div className="sm:col-span-1">
          <Forecast5Days />
        </div>
        <div className="sm:col-span-2">
          <ForecastHourly weatherData={forecast} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
