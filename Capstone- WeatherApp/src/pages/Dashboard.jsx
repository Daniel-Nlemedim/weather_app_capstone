import Header from "../components/header";
import CurrentWeather from "../components/CurrentWeather";
import Forecast5Days from "../components/Forecast5Days";
import ForecastHourly from "../components/ForecastHourly";
import AppThemeLayout from "../layout/AppThemeLayout";
import { useState } from "react";
import useSWR from "swr";

function Dashboard() {
  const [query, setQuery] = useState("Lagos");
  const apiKey = "700c116fb84bb53fdeec9c74479db76f";
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: current, error: errCurrent } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      query
    )}&appid=${apiKey}&units=metric`,
    fetcher
  );

  const { data: forecast, error: errForecast } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
      query
    )}&appid=${apiKey}&units=metric`,
    fetcher
  );

  if (errCurrent || errForecast) return <div>Error loading data</div>;
  if (!current || !forecast) return <div>Loading...</div>;

  return (
    <AppThemeLayout>
      {({ isDarkMode, toggleDarkMode }) => (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
          <Header
            setQuery={setQuery}
            apiKey={apiKey}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />

          <CurrentWeather weatherData={current} />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 mr-7">
            <div className="sm:col-span-1">
              <Forecast5Days weatherData={forecast} />
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-4 ">
              <ForecastHourly weatherData={forecast} />
            </div>
          </div>
        </div>
      )}
    </AppThemeLayout>
  );
}

export default Dashboard;
